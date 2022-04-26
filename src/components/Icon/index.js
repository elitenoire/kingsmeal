import { memo } from 'react'
import { icons } from './iconMap'

function IconBase({ name }) {
	const IconSvg = icons[name]
	try {
		if (!IconSvg) throw new Error(`Unknown icon '${name}'`)
	} catch (err) {
		console.warn(err)
		return null
	}
	return <IconSvg fill="currentColor" />
}

export const Icon = memo(IconBase)
