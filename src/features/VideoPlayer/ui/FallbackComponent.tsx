import { CircularProgress, Stack, SxProps } from "@mui/material"

const progressStyles:SxProps = { color: 'var(--bg)' }

const FallbackComponent = () => {
	return (
		<Stack justifyContent='center' alignItems='center' height='100%'>
			<CircularProgress sx={progressStyles} size='30px' />
		</Stack>
	)
}

export default FallbackComponent