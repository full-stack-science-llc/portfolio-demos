# Chart State Loss Analysis - Voith Paper Mill Demo

## Problem Summary
When switching between tiles in the dashboard, the chart data is reset and previous state is lost. Each tile click creates a fresh chart with no historical data, even when returning to a previously viewed component.

## Root Cause Analysis

### 1. State Initialization on Component Change
**Location:** `src/components/SensorDashboard.jsx:10-19`

```javascript
useEffect(() => {
  const componentSensors = Object.keys(SENSORS).filter(
    (id) => SENSORS[id].component === selectedComponent
  );
  const initialData = {};
  componentSensors.forEach(id => {
    initialData[id] = Array(MAX_DATA_POINTS).fill(null);
  });
  setChartData(initialData);
}, [selectedComponent]);
```

**Issue:** Every time `selectedComponent` changes, the chart data is completely reset to an array of null values. This is the primary cause of state loss.

### 2. Component Lifecycle and Re-rendering
**Location:** `src/App.jsx:38-43`

The SensorDashboard component is conditionally rendered:
```javascript
{selectedComponent ? (
  <SensorDashboard
    liveData={sensorData}
    selectedComponent={selectedComponent}
    onClose={handleCloseDashboard}
  />
) : (
  // Default view
)}
```

**Issue:** When switching tiles, the entire SensorDashboard component unmounts and remounts, losing all internal state.

### 3. Data Accumulation Logic
**Location:** `src/components/SensorDashboard.jsx:21-41`

```javascript
useEffect(() => {
  if (liveData && selectedComponent) {
    setChartData(prevData => {
      const newData = { ...prevData };
      const componentSensors = Object.keys(SENSORS).filter(
        (id) => SENSORS[id].component === selectedComponent
      );

      componentSensors.forEach(sensorId => {
        if (liveData[sensorId]) {
          const newHistory = [...(prevData[sensorId] || []), liveData[sensorId].value];
          if (newHistory.length > MAX_DATA_POINTS) {
            newHistory.shift();
          }
          newData[sensorId] = newHistory;
        }
      });
      return newData;
    });
  }
}, [liveData, selectedComponent]);
```

**Issue:** While this logic correctly accumulates data, it starts from scratch each time due to the reset in the first useEffect.

## Why State is Lost

1. **Component Unmounting**: When clicking a different tile, the SensorDashboard component unmounts completely
2. **State Reset**: When mounting for a new component, `chartData` is reset to empty arrays
3. **No Persistence**: There's no mechanism to persist chart data between component switches
4. **Fresh Start**: Each tile selection starts with a clean slate instead of resuming from where it left off

## Current Behavior Flow

1. User clicks Tile A → SensorDashboard mounts → chartData initialized as empty arrays → data accumulates
2. User clicks Tile B → SensorDashboard unmounts → all Tile A data lost → SensorDashboard mounts → chartData initialized as empty arrays for Tile B
3. User clicks Tile A again → Tile B data lost → chartData re-initialized as empty arrays → starts accumulating from scratch

## Expected Behavior

Each tile should maintain its own historical chart data that persists when switching between tiles. When returning to a previously viewed tile, the chart should resume from its last state with all previously accumulated data intact.

## Solution Requirements

To fix this issue, the application needs:

1. **Persistent State Storage**: Chart data should be stored outside the SensorDashboard component
2. **Component-Specific State**: Each component should have its own separate chart data storage
3. **State Preservation**: When switching components, previous data should be preserved
4. **State Restoration**: When returning to a component, its previous chart state should be restored

## Technical Implementation Options

### Option 1: Lift State Up
Move chart data state to the App component and pass it down as props.

### Option 2: Global State Management
Use Context API or state management library to store chart data globally.

### Option 3: Component State Persistence
Modify the SensorDashboard to not reset data when selectedComponent changes, but instead maintain separate data buckets for each component.

### Option 4: Custom Hook
Create a custom hook that manages persistent chart data across component switches.

The most straightforward solution would be Option 1 (lifting state up) as it requires minimal architectural changes while solving the core issue.