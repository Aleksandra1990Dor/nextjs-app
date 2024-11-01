import { StyledOptions } from '@emotion/styled'

export const getStyledOptions = <T extends Record<string, unknown>>(
	propsArray: Array<keyof T>
): StyledOptions => {
	return {
		shouldForwardProp: (prop: string) => propsArray.every(p => p !== prop)
	}
}
