import React from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { IoThermometerSharp } from 'react-icons/io5';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
// import {BrowserView} from 'react-device-detect';

const TempGauge = () => {
	const { gradients } = colors;
	const { cardContent } = gradients;

	const [temp, setTemp] = useState([]);

	const userid = window.localStorage.getItem("userid")
	useEffect(() => {
		fetch(`https://growino.app/api/sensor?userid=${userid}&tent=1`)
			.then((res) => res.json())
			.then((data) => {
				setTemp(parseFloat(data[0].temperature))
			}).catch(() => {
				setTemp(69)
			});
	}, []);

	return (
		<Card sx={{ height: '340px' }}>
			<VuiBox display='flex' flexDirection='column' justifyContent="center" alignItems="center">
				<VuiTypography variant='lg' color='white' fontWeight='bold' mb='4px'>
					Temperatura
				</VuiTypography>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }} marginTop="10px">
						<CircularProgress variant='determinate' value={temp * 2.5} size={150} color='error' />
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
								<IoThermometerSharp size='30px' color='#e31a1a' />
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
							10°
						</VuiTypography>
					</BrowserView> */}
					<VuiBox
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
						sx={{ minWidth: '60px' }}>
						<VuiTypography color='white' variant='h3'>
							{temp}°
						</VuiTypography>
					</VuiBox>

					{/* <BrowserView>
						<VuiTypography color='text' variant='caption' display='inline-block' fontWeight='regular' textAlign="center">
							40°
						</VuiTypography>
					</BrowserView> */}
				</VuiBox>
			</VuiBox>
		</Card>
	);
};

export default TempGauge;
