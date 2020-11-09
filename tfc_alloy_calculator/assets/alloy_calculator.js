let metals = {
  'copper':new MetalTFC('copper'),
  'tin':new MetalTFC('tin'),
  'gold':new MetalTFC('gold'),
  'silver':new MetalTFC('silver'),
  'nickel':new MetalTFC('nickel'),
  'zinc':new MetalTFC('zinc'),
  'platinum':new MetalTFC('platinum'),
  'bismuth':new MetalTFC('bismuth'),
  'bismuth_bronze':new MetalTFC('bismuth_bronze'),
  'bronze':new MetalTFC('bronze'),
  'black_bronze':new MetalTFC('black_bronze'),
}

let bronze = MetalTFC.emptyMap();
bronze.set(metals.copper, 88.92);
bronze.set(metals.tin, 8.12);

let a = {
  'bismuth_bronze' : 'copper.50.65,zinc.20.30,bismuth.10.20',
  'black_bronze' : 'copper.50.70,silver.10.25,gold.10.25',
  'bronze' : 'copper.88.92,tin.8.12',
  'brass' : 'copper.88.92,zinc.8.12',
  'rose_gold' : 'copper.15.30,gold.70.85',
  'sterling_silver' : 'copper.20.40,silver.60.80',
  'weak_steel' : 'steel.50.70,nickel.15.25,black_bronze.15.25',
  'weak_blue_steel' : 'black_steel.50.55,steel.20.25,bismuth_bronze.10.15,sterling_silver.10.15',
  'weak_red_steel' : 'black_steel.50.55,steel.20.25,brass.10.15,rose_gold.10.15',
  // metallum alloys
  'constantan' : 'copper.40.60,nickel.40.60',
  'electrum' : 'gold.40.60,silver.40.60',
  'mithril' : 'copper.88.92,antimony.8.12',
  'constantan' : 'wrought_iron.60.70,nickel.30.40',
  'constantan' : 'aluminium.65.85,copper.15.35',
  'manyullyn' : 'cobalt.40.60,ardite.40.60',
  'tungsten_steel' : 'tungsten.40.60,steel.72.98',
  'nickel_silver' : 'copper.50.65,zinc.10.30,nickel.10.30',
  'ferroboron' : 'steel.40.60,boron.40.60',
  'hsla_steel' : 'steel.20.40,manganese.40.60',
  'magnesium_diboride' : 'boron.40.60,magnesium.20.40',
  'beryllium_copper' : 'beryllium.30.60,copper.30.60,aluminium.10.30',
  'zircaloy' : 'zirconium.72.98,tin.20.40',
  'tough' : 'ferroboron.40.60,lithium.40.60',
}

function getAlloy(metal) {
  return alloys[metal]
}

class MetalTFC
{
  /**
   * 
   * @param {String} name 
   * @param {Number} color 
   */
  constructor(name, color=000000)
  {
    this.name = name;
    this.color = color;
  }
  /**
   * @returns {Map<MetalTFC, String>}
   */
  static emptyMap()
  {
    return new Map();
  }
}

class Alloy 
{
  /**
   * Create a alloy
   * @param {String} name 
   * @param {Map<MetalTFC,String>} values
   */
  constructor(name, values)
  {
    this.name=name;
    this.props=values;
  }
  /**
   * get a metal proportion
   * @param {String} metal 
   */
  getValue(metal)
  {
    return this.props.get(metal);
  }
  /**
   * get values
   */
  getValues()
  {
    return this.props.values();
  }
  /**
   * split alloy values with a seperator
   * @param {String} seperator 
   */
  splitValues(seperator)
  {
    return this.props.split(seperator)
  }
  /**
   * 
   * @param {any[]} array 
   * @param {String} seperator 
   */
  static splitArray(array, seperator)
  {
    return array.split(seperator)
  }
}