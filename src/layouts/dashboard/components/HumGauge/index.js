import React from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { IoWater } from 'react-icons/io5';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
// import { BrowserView } from 'react-device-detect';


const HumGauge = () => {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	const [humidity, setHumidity] = useState([]);
	useEffect(() => {
		fetch('http://18.231.172.73/sensor/get?tent=1')
			.then((res) => res.json())
			.then((data) => {
				setHumidity(parseInt(data[0].humidity))
			}).catch(() => {
				setHumidity(69)
			});
	}, []);

	return (
		<Card sx={{ height: '340px' }}>
			<VuiBox display='flex' flexDirection='column' justifyContent="center" alignItems="center">
				<VuiTypography variant='lg' color='white' fontWeight='bold' mb='4px'>
					Humedad
				</VuiTypography>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }} marginTop="10px">
						<CircularProgress variant='determinate' value={humidity * 1} size={150} color='info' />
						<VuiBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<VuiBox
								sx={{
									background: "#fff",
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<IoWater size='30px' color={info.main} />
							</VuiBox>
						</VuiBox>
					</VuiBox>
				</VuiBox>
				<VuiBox
					sx={({ breakpoints }) => ({
						width: '90%',
						marginTop: "10px",
						padding: '18px 22px',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'row',
						height: '82px',
						mx: 'auto',
						borderRadius: '20px',
						background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
						zIndex: '1000'
					})}>
					{/* <BrowserView>
						<VuiTypography color='text' variant='caption' display='inline-block' fontWeight='regular'>
							0%
						</VuiTypography>
					</BrowserView> */}
					<VuiBox
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
						sx={{ minWidth: '60px' }}>
						<VuiTypography color='white' variant='h3'>
							{humidity}%
						</VuiTypography>
					</VuiBox>
					{/* <BrowserView>
						<VuiTypography color='text' variant='caption' display='inline-block' fontWeight='regular' textAlign="center">
							100%
						</VuiTypography>
					</BrowserView> */}
				</VuiBox>
			</VuiBox>
		</Card>
	);
};

export default HumGauge;
