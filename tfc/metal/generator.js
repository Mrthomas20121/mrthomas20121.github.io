function generateLang()
{
    let metal_types = [
        'ingot',
        'double_ingot',
        'sheet',
        'double_sheet',
        'scrap',
        'dust',
        'nugget',
        'lamp'
    ]
    let tools_types = [
        'pick_head',
        'pick',
        'shovel_head',
        'shovel',
        'axe_head',
        'axe',
        'hoe_head',
        'hoe',
        'chisel_head',
        'chisel',
        'sword_blade',
        'sword',
        'mace_head',
        'mace',
        'saw_blade',
        'saw',
        'javelin_head',
        'javelin',
        'hammer_head',
        'hammer',
        'propick_head',
        'propick',
        'knife_blade',
        'knife',
        'scythe_blade',
        'scythe',
        'shears',
        'shield',
        'tuyere'
    ]
    let unfinished_armor_parts = [
        'helmet',
        'chestplate',
        'greaves',
        'boots'
    ]

    let output = document.getElementById('output')
    let metal = document.getElementById('metalName').value
    let tier = document.getElementById('tier').value
    let tools = document.getElementById('tools').value

    let lang = ''

    lang = lang + `# metals \ntfc.types.metal.${metal}=${Capitalize(metal)}`
    lang = lang + `\nfluid.${metal}=Molten ${Capitalize(metal)}`
    lang = lang + `\ntile.tfc.lamp.${metal}.name=${Capitalize(metal)} Lamp`
    lang = lang + `\ntile.tfc.lamp.${metal}.filled.name=%s ${Capitalize(metal)} Lamp`
    lang = lang + `\ntile.tfc.trapdoor.${metal}.name=${Capitalize(metal)} Trapdoor`
    for(let metalType of metal_types)
    {
        lang = lang + `\nitem.tfc.metal.${metalType}.${metal}.name=${Capitalize(metal)} ${metalType}`
    }

    if(tools == '1')
    {
        lang = lang + `\nitem.tfc.metal.anvil.${metal}.name=${Capitalize(metal)} Anvil`
        lang = lang + `\nitem.tfc.metal.tuyere.${metal}.name=${Capitalize(metal)} Tuyere`

        lang = lang + `\n# Tools`
        for(let toolType of tools_types)
        {
            lang = lang + `\nitem.tfc.metal.${toolType}.${metal}.name=${Capitalize(metal)} ${Capitalize(toolType)}`
        }
        for(let unfinished_armor of unfinished_armor_parts)
        {
            lang = lang + `\nitem.tfc.metal.${unfinished_armor}.${metal}.name=${Capitalize(metal)} ${Capitalize(unfinished_armor)}`
            lang = lang + `\nitem.tfc.metal.unfinished_${unfinished_armor}.${metal}.name=Unfinished ${Capitalize(metal)} ${Capitalize(unfinished_armor)}`
        }
    }
    lang = lang + '\n# molds'
    lang = lang + `\nitem.tfc.ceramics.mold.ingot.${metal}.name=Unshaped ${Capitalize(metal)}`
    for(let toolType of tools_types)
    {
        lang = lang + `\nitem.tfc.ceramics.mold.${toolType}.${metal}.name=${Capitalize(toolType)} ${Capitalize(metal)}`   
    }
    
    if(tier == 3)
    {
        lang = lang + `item.tfc.bloom.unrefined.${metal}.name=Raw ${metal} Bloom`
        lang = lang + `item.tfc.bloom.refined.${metal}.name=Refined ${metal} Bloom`
    }

    output.innerHTML = lang;
}

function Capitalize(metal)
{
    if(metal.includes("_"))
	{
		let types = metal.split("_");
		let res = ""
		for(let type of types)
		{
			res = res + " " + type[0].toUpperCase() + type.substring(1)
		}
		return res;
	}
	else {
		return metal[0].toUpperCase() + metal.substring(1)
	}
}