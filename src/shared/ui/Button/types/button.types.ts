import { styled } from "@mui/material"

export type ButtonPropsType = { isLarge?: boolean }

export type StyledOptionsType = (
	props: ButtonPropsType
) => Parameters<ReturnType<typeof styled>>[1]
