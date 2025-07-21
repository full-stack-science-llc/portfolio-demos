# Issue-to-Sensor Mapping: Primary and Downstream Responses

This document provides a comprehensive mapping of paper mill issues to sensor responses, showing the cascade from initial detection through downstream effects.

## Understanding Response Patterns

### Response Categories:
- **Primary Response**: First sensors to detect the issue (immediate, direct cause)
- **Secondary Response**: Sensors that respond due to direct process effects (minutes)
- **Downstream Response**: Sensors affected by propagated effects (minutes to hours)
- **Quality Impact**: Final quality sensors showing end-product effects (hours)

### Timing Classifications:
- **Immediate** (0-30 seconds): Direct sensor response
- **Short-term** (30 seconds - 5 minutes): Process propagation
- **Medium-term** (5-30 minutes): Section-to-section effects
- **Long-term** (30+ minutes): Quality and end-product effects

---

## TIER 1 ISSUES: Most Common & Expensive

### 1. Web/Sheet Breaks ⭐ (Current Issue)

**Initial Component**: Any section (wire, press, drying, calendering, winding)

**Primary Sensor Response** (Immediate: 0-5 seconds):
- **Web Tension Sensors**: Sudden drop to zero or spike before break
- **Speed Sensors**: Immediate speed change/stop
- **Draw Tension Sensors**: Loss of tension between sections

**Secondary Response** (Short-term: 5-60 seconds):
- **Vibration Sensors**: Increased vibration from loose web/equipment
- **Motor Current Sensors**: Current changes due to load variations
- **Vacuum Pressure Sensors**: Pressure fluctuations in forming section

**Downstream Response** (Medium-term: 1-10 minutes):
- **Temperature Sensors**: Temperature changes in drying section (reduced load)
- **Steam Pressure Sensors**: Pressure variations due to reduced demand
- **Consistency Sensors**: Variations during restart procedures

**Quality Impact** (Long-term: 10+ minutes):
- **Moisture Sensors**: Profile variations during restart
- **Basis Weight Scanners**: Variations during threading/restart

---

### 2. Consistency Control Failures

**Initial Component**: Pulp Preparation, Headbox

**Primary Sensor Response** (Immediate: 0-2 minutes):
- **Consistency Sensors**: Direct measurement drift/fluctuation
- **Flow Sensors**: Flow rate variations affecting consistency
- **Level Sensors**: Tank level changes affecting dilution ratios

**Secondary Response** (Short-term: 2-10 minutes):
- **pH Sensors**: Changes due to consistency affecting chemical ratios
- **Pressure Sensors**: Pump pressure changes
- **Conductivity Sensors**: Changes in electrical properties

**Downstream Response** (Medium-term: 10-30 minutes):
- **Formation Sensors**: Poor fiber distribution in wire section
- **Basis Weight Scanners**: Direct impact on paper weight profile
- **Dewatering Vacuum Sensors**: Changes in drainage characteristics

**Quality Impact** (Long-term: 30+ minutes):
- **Moisture Sensors**: Uneven moisture due to formation issues
- **Caliper Sensors**: Thickness variations
- **Smoothness Sensors**: Surface quality variations

---

### 3. Moisture Profile Issues ⭐ (Current Issue)

**Initial Component**: Drying Section

**Primary Sensor Response** (Immediate: 0-5 minutes):
- **IR Moisture Scanners**: Direct moisture profile measurement
- **Temperature Sensors**: Surface temperature variations
- **Steam Flow Sensors**: Steam consumption irregularities

**Secondary Response** (Short-term: 5-15 minutes):
- **Steam Pressure Sensors**: Pressure variations in supply
- **Web Tension Sensors**: Tension changes due to differential shrinkage
- **Vibration Sensors**: Increased vibration from tension variations

**Downstream Response** (Medium-term: 15-60 minutes):
- **Caliper Sensors**: Thickness variations from moisture differences
- **Web Tension Sensors** (Calendering/Winding): Increased tension variations
- **Temperature Sensors** (Calendering): Heating compensation

**Quality Impact** (Long-term: 1+ hours):
- **Smoothness Sensors**: Surface quality affected by moisture variations
- **Gloss Sensors**: Appearance variations
- **Formation Sensors**: Curl and dimensional stability issues

---

### 4. Equipment Bearing Failures ⭐ (Current Issue)

**Initial Component**: Any rotating equipment (press rolls, drying cylinders, etc.)

**Primary Sensor Response** (Immediate: hours to days before failure):
- **Vibration Sensors**: Increased amplitude and frequency changes
- **Temperature Sensors**: Bearing temperature rise
- **Motor Current Sensors**: Increased power draw

**Secondary Response** (Short-term: minutes to hours):
- **Speed Sensors**: Speed variations/hunting
- **Web Tension Sensors**: Tension fluctuations from uneven rolling
- **Pressure Sensors**: Hydraulic pressure variations (if hydraulically loaded)

**Downstream Response** (Medium-term: hours):
- **Quality Sensors**: Progressive degradation of surface finish
- **Vibration Sensors** (Adjacent equipment): Sympathetic vibrations
- **Temperature Sensors** (Adjacent areas): Heat transfer effects

**Quality Impact** (Long-term: hours to days):
- **Smoothness Sensors**: Surface marking and roughness
- **Caliper Sensors**: Thickness variations
- **Gloss Sensors**: Surface appearance degradation

---

### 5. Steam System Failures ⭐ (Current Issue)

**Initial Component**: Drying Section

**Primary Sensor Response** (Immediate: 0-2 minutes):
- **Steam Pressure Sensors**: Pressure drop or fluctuations
- **Steam Flow Sensors**: Flow rate changes
- **Temperature Sensors**: Steam temperature variations

**Secondary Response** (Short-term: 2-10 minutes):
- **Cylinder Temperature Sensors**: Surface temperature drop
- **IR Temperature Scanners**: Web surface temperature reduction
- **Condensate Flow Sensors**: Changes in condensate return

**Downstream Response** (Medium-term: 10-30 minutes):
- **Moisture Sensors**: Increased moisture content in paper
- **Web Tension Sensors**: Tension changes due to incomplete drying
- **Speed Sensors**: Machine speed reduction to compensate

**Quality Impact** (Long-term: 30+ minutes):
- **Moisture Profile Scanners**: Cross-direction moisture variations
- **Caliper Sensors**: Thickness changes from moisture retention
- **Formation Sensors**: Quality degradation from process compensation

---

## TIER 2 ISSUES: Equipment Failures

### 6. Hydraulic System Failures ⭐ (Current Issue)

**Initial Component**: Press Section, Calendering

**Primary Sensor Response** (Immediate: 0-1 minute):
- **Hydraulic Pressure Sensors**: Pressure drop or loss
- **Flow Sensors**: Hydraulic flow reduction
- **Temperature Sensors**: Hydraulic fluid temperature changes

**Secondary Response** (Short-term: 1-5 minutes):
- **Nip Pressure Sensors**: Loss of nip loading
- **Linear Load Sensors**: Reduced loading force
- **Vibration Sensors**: Changes in roll dynamics

**Downstream Response** (Medium-term: 5-20 minutes):
- **Moisture Sensors**: Reduced dewatering efficiency
- **Web Tension Sensors**: Tension variations from poor nip control
- **Temperature Sensors**: Roll temperature changes

**Quality Impact** (Long-term: 20+ minutes):
- **Caliper Sensors**: Bulk variations from poor pressing
- **Smoothness Sensors**: Surface finish degradation
- **Moisture Profile Scanners**: Uneven moisture removal

---

### 7. Motor Overheating ⭐ (Current Issue)

**Initial Component**: Any motor-driven equipment

**Primary Sensor Response** (Immediate: 0-30 minutes):
- **Motor Temperature Sensors**: Direct temperature rise
- **Current Sensors**: Increased current draw
- **Vibration Sensors**: Bearing/motor vibration changes

**Secondary Response** (Short-term: 30 minutes - 2 hours):
- **Speed Sensors**: Speed variations or hunting
- **Equipment Temperature Sensors**: Heat transfer to driven equipment
- **Cooling System Sensors**: Increased cooling demand

**Downstream Response** (Medium-term: 2+ hours):
- **Process Temperature Sensors**: Equipment temperature effects on process
- **Web Tension Sensors**: Tension variations from speed/load changes
- **Quality Sensors**: Progressive quality degradation

**Quality Impact** (Long-term: Hours):
- **Surface Quality Sensors**: Marking or finish issues
- **Dimensional Stability**: Process variations affecting dimensions

---

### 8. Vacuum System Failures

**Initial Component**: Wire Section, Press Section (Uhle boxes)

**Primary Sensor Response** (Immediate: 0-2 minutes):
- **Vacuum Pressure Sensors**: Pressure loss or fluctuations
- **Vacuum Flow Sensors**: Air flow rate changes
- **Motor Current Sensors**: Vacuum pump current changes

**Secondary Response** (Short-term: 2-10 minutes):
- **Consistency Sensors** (White water): Increased solids content
- **Felt Condition Sensors**: Changes in felt moisture content
- **Web Tension Sensors**: Tension changes from poor dewatering

**Downstream Response** (Medium-term: 10-30 minutes):
- **Moisture Sensors**: Increased moisture to press section
- **Press Nip Pressure**: Increased loading to compensate
- **Steam Consumption**: Increased drying energy requirements

**Quality Impact** (Long-term: 30+ minutes):
- **Basis Weight Scanners**: Formation quality degradation
- **Caliper Sensors**: Bulk variations
- **Formation Sensors**: Poor formation from inadequate dewatering

---

### 9. Web Tension Instability ⭐ (Current Issue)

**Initial Component**: Any section, commonly between sections

**Primary Sensor Response** (Immediate: 0-30 seconds):
- **Web Tension Sensors**: Direct measurement fluctuations
- **Draw Sensors**: Tension variations between drives
- **Speed Sensors**: Speed differential measurements

**Secondary Response** (Short-term: 30 seconds - 5 minutes):
- **Vibration Sensors**: Web flutter and equipment vibration
- **Web Inspection Sensors**: Web position/tracking variations
- **Motor Current Sensors**: Current fluctuations from load changes

**Downstream Response** (Medium-term: 5-30 minutes):
- **Roll Diameter Sensors**: Changes in winding characteristics
- **Nip Load Sensors**: Compensation loading adjustments
- **Temperature Sensors**: Friction-related temperature changes

**Quality Impact** (Long-term: 30+ minutes):
- **Caliper Sensors**: Thickness variations from tension effects
- **Smoothness Sensors**: Surface marking from tension variations
- **Winding Quality**: Roll building defects

---

## TIER 3 ISSUES: Process Control

### 10. pH Control System Failures

**Initial Component**: Pulp Preparation, Headbox

**Primary Sensor Response** (Immediate: 0-5 minutes):
- **pH Sensors**: Direct measurement drift
- **Conductivity Sensors**: Changes in solution conductivity
- **Chemical Flow Sensors**: Dosing system irregularities

**Secondary Response** (Short-term: 5-20 minutes):
- **Consistency Sensors**: Changes in fiber behavior
- **Retention Aid Effectiveness**: Chemical interaction changes
- **White Water Quality Sensors**: Changes in recirculated water

**Downstream Response** (Medium-term: 20-60 minutes):
- **Formation Sensors**: Poor fiber retention and formation
- **Dewatering Efficiency**: Changes in drainage characteristics
- **Basis Weight Scanners**: Weight profile variations

**Quality Impact** (Long-term: 1+ hours):
- **Strength Properties**: Reduced bonding efficiency
- **Moisture Sensors**: Changes in water retention
- **Surface Quality**: Overall quality degradation

---

### 11. Nip Pressure Variations

**Initial Component**: Press Section, Calendering

**Primary Sensor Response** (Immediate: 0-1 minute):
- **Nip Pressure Sensors**: Direct pressure measurement changes
- **Linear Load Sensors**: Loading force variations
- **Hydraulic Pressure Sensors**: System pressure fluctuations

**Secondary Response** (Short-term: 1-10 minutes):
- **Vibration Sensors**: Roll vibration from pressure variations
- **Temperature Sensors**: Roll temperature changes
- **Motor Current Sensors**: Drive system load changes

**Downstream Response** (Medium-term: 10-30 minutes):
- **Moisture Sensors**: Dewatering efficiency changes
- **Web Tension Sensors**: Tension variations from nip effects
- **Quality Profile Sensors**: Cross-direction quality variations

**Quality Impact** (Long-term: 30+ minutes):
- **Caliper Sensors**: Bulk and thickness variations
- **Smoothness Sensors**: Surface finish variations
- **Gloss Sensors**: Appearance quality changes

---

## TIER 4 ISSUES: Quality Control

### 12. Basis Weight Variations

**Initial Component**: Headbox, Consistency Control

**Primary Sensor Response** (Immediate: 0-5 minutes):
- **Basis Weight Scanners**: Direct measurement of weight profile
- **Consistency Sensors**: Feedstock consistency variations
- **Dilution Flow Sensors**: Dilution water flow irregularities

**Secondary Response** (Short-term: 5-15 minutes):
- **Formation Sensors**: Fiber distribution effects
- **Headbox Pressure Sensors**: Distribution pressure changes
- **Flow Distribution Sensors**: Cross-direction flow variations

**Downstream Response** (Medium-term: 15-60 minutes):
- **Moisture Sensors**: Drying variations due to basis weight
- **Caliper Sensors**: Thickness changes correlating with weight
- **Web Tension Sensors**: Tension variations from weight differences

**Quality Impact** (Long-term: 1+ hours):
- **Smoothness Sensors**: Surface quality variations
- **Gloss Sensors**: Appearance variations
- **Printability**: Overall quality grade effects

---

## Sensor Response Timeline Summary

### Immediate Response (0-30 seconds):
- **Direct measurement sensors** for the failing system
- **Safety-critical sensors** (pressure, temperature limits)
- **Primary process variable sensors**

### Short-term Response (30 seconds - 5 minutes):
- **Adjacent system sensors** 
- **Compensating control system sensors**
- **Equipment condition sensors**

### Medium-term Response (5-30 minutes):
- **Downstream process sensors**
- **Quality-related process sensors**
- **Energy/efficiency sensors**

### Long-term Response (30+ minutes):
- **Final product quality sensors**
- **Economic impact sensors**
- **Customer-visible quality parameters**

## Implementation Notes for Simulation

### Primary Response Modeling:
- Use direct mathematical relationships
- Immediate sensor value changes
- High correlation with root cause

### Secondary Response Modeling:
- Introduce time delays (30 seconds - 5 minutes)
- Use process transfer functions
- Moderate correlation with primary sensors

### Downstream Response Modeling:
- Longer time delays (5-30 minutes)
- Lower correlation factors
- Multiple contributing factors

### Quality Impact Modeling:
- Longest delays (30+ minutes)
- Complex multi-variable relationships
- Customer/specification-related parameters

This mapping provides the foundation for realistic sensor behavior simulation, showing how real paper mill issues cascade through the process and instrumentation systems.