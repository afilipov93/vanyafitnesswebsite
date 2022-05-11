import React from 'react';

import ContentBlock from '../components/ContentBlock/ContentBlock';
import Dropdown from '../components/Dropdown/Dropdown';
import Packages from '../components/Packages/Packages';
import { Steps, StepsContainer } from '../components/Steps/Steps';
import Activation from '../components/Activation/Activation';

const packages = [
	{
		id: 'light-focus',
		title: 'Light focus',
		services: [
			{
				interval: 1,
				duration: 60,
				location: 'Privé trainingsruimte',
				schema: 'Op maat gemaakt schema',
				reschedule: '2x optie tot verzetten',
				tests: '',
				planning: '',
				evaluation: '',
				timeAroundTraining: '',
				whatsapp: '',
				merchandise: '',
			},
		],
		price: 480,
	},
	{
		id: 'fair-focus',
		title: 'Fair focus',
		services: [
			{
				interval: 2,
				duration: 60,
				location: 'Privé trainingsruimte',
				schema: 'Op maat gemaakt schema',
				reschedule: 'Verzetten tot 24 uur voor de training',
				nutrition: 'Voedingstips',
				tests: '1RM test',
				planning: 'Trainingsplanning',
				evaluation: '',
				timeAroundTraining: '',
				whatsapp: '',
				merchandise: '',
			},
		],
		price: 1120,
	},
	{
		id: 'total-focus',
		title: 'Total focus',
		services: [
			{
				interval: 2,
				duration: 60,
				location: 'Privé trainingsruimte',
				schema: 'Op maat gemaakt schema',
				reschedule: 'Verzetten tot 12 uur voor de training',
				nutrition: 'Berekening van energiebehoefte en eetschema',
				tests: '1RM test',
				planning: 'Trainingsplanning',
				evaluation: 'Tussentijdse-evaluatie',
				timeAroundTraining: '',
				whatsapp: '',
				merchandise: '',
			},
		],
		price: 1280,
	},
	{
		id: 'hyper-focus',
		title: 'Hyper focus',
		services: [
			{
				interval: 2,
				duration: 90,
				location: 'Privé trainingsruimte',
				schema: 'Op maat gemaakt schema',
				reschedule: 'Verzetten tot 2 uur voor de training',
				nutrition: 'Online voedingsdagboek',
				tests: '1RM test, test specifiek voor behalen doelen',
				planning: 'Uitgebreide trainingsplanning',
				evaluation: '4 weekse-evaluatie',
				timeAroundTraining: '15 min bijpraten of vragen stellen',
				whatsapp: '24/7 vragen stellen via whatsapp',
				merchandise: 'Sporthanddoek met je eigen naam',
			},
		],
		price: 1440,
	},
];

const Home = (props) => {
	const addPackage = (data) => {
		props.setPackage(data);
	};
	return (
		<React.Fragment>
			<ContentBlock backgroundImage="/SMALL/1V0A4524.jpg">
				<h2>Trainen met volle focus</h2>
				<p>Wat zou je kunnen bereiken als je je vol focust op je doelen?</p>
				<p>
					Als je echt uitspreekt wat je verlangt op het gebied van fitheid en
					gezondheid?
				</p>
			</ContentBlock>
			<Activation
				message="Wil je je beter focussen op je doelen?"
				buttonText="Maak contact"
				onClick={props.modalHandler}
			/>
			<ContentBlock>
				<h2>
					<em>
						De eerste stap is het zeggen. Daarna vraag ik nog 1 ding van je:
					</em>
				</h2>
			</ContentBlock>
			<ContentBlock backgroundImage="/SMALL/1V0A4435.jpg">
				<div className="title-container__fullwidth">
					<article>
						<h3 className="title__fullwidth">COMMITMENT</h3>
					</article>
				</div>
			</ContentBlock>
			<ContentBlock>
				<blockquote>
					Jij committeert je aan jouw doelen en ik committeer me aan jou.
				</blockquote>
			</ContentBlock>
			<ContentBlock>
				<h2>
					<em>100%</em>
				</h2>
			</ContentBlock>
			<ContentBlock>
				<p>
					Want jij verdient de zorg van een docent en de kennis van een
					professional.
				</p>

				<p>
					Zodat jij je doelen op de allerbeste manier haalt en je zal ervaren
					dat je altijd net iets meer kunt dan je denkt.
				</p>

				<p>
					Zie jouw doel voor je én alvast je volgende doel. Want dankzij jouw
					focus en commitment stijg jij binnen no time boven jezelf uit.
					Beloofd.
				</p>
			</ContentBlock>
			<ContentBlock>
				<section className="inline-grid__desktop">
					<Dropdown title="Je krijgt de zorg van een docent en de kennis van een pro.">
						<ul>
							<li>
								van persoonlijke communicatie tot een parkeerplek voor de deur
								en trainen in een privé ruimte. Ik zorg dat jij je op alle
								fronten vol kan focussen op jouw doelen.
							</li>
							<li>
								De beste docent geeft je een gevoel van vertrouwen en zorgt dat
								jij veilig bent.
							</li>
							<li>
								Ik draag mijn kennis zo over dat je echt begrijpt waarom en wat
								je traint. Daarmee houd je je commitment langer vast.
							</li>
						</ul>
					</Dropdown>
					<Dropdown title="Jij kunt altijd net iets meer dan je nu denkt. Dat ervaar je elke training.">
						<ul>
							<li>
								Ik geniet ervan als mijn trainees verbaasd zijn over wat ze zelf
								kunnen. Een gewicht optillen waarvan gedacht werd dat het
								onmogelijk was of juist iets veel simpelers als weer balanceren
								op 1 been.
							</li>
							<li>
								Juist door persoonlijk en op maat te trainen bescherm je jezelf
								voor blessures én ongewenste blootstellingen die je wel in de
								sportschool hebt.
							</li>
							<li>
								Door met mij samen te werken zie jij scherp wat je straks kan.
							</li>
						</ul>
					</Dropdown>
					<Dropdown title="Jij committeert je aan jouw doelen en ik committeer me aan jou.">
						<ul>
							<li>
								We werken altijd vanuit de waarom. Dit is de grootste basis voor
								jouw commitment.
							</li>
							<li>
								Sporters mogen veel eisen van de coach. En jij dus ook van mij.
								Het is jouw lijf en jouw gezondheid, die staan op #1.
							</li>
							<li>
								Waar jij nu ook bent qua fitheid, je boekt altijd progressie.
							</li>
							<li>
								Ik luister naar wat je zegt en doe daar wat mee. Feedback is
								belangrijk zeker als jouw motivatie daardoor groeit.
							</li>
						</ul>
					</Dropdown>
				</section>
			</ContentBlock>
			<ContentBlock>
				<h2>Pakketten</h2>
				<p>
					Om echt veranderingen te zien is 2 maanden commitment nodig van jou,
					voor minder doen we het niet. Onderstaande prijzen zijn op deze
					gedachte gebasseerd.
				</p>
				<div className="packages-container">
					<Packages
						items={packages}
						onClick={props.modalHandler}
						package={(data) => {
							addPackage(data);
						}}
					/>
				</div>
			</ContentBlock>
			<ContentBlock>
				<StepsContainer>
					<Steps count="1" border={true}>
						<h3>Neem contact op</h3>
						<p>We prikken een datum voor je intake</p>
					</Steps>
					<Steps count="2">
						<h3>De intake</h3>
						<p>
							We gaan het hebben over jouw doelen en wensen en hoe we ons daar
							het beste op kunnen foccusen. Ook doen we een test om te kijken
							hoe je beweegt en waar we naar moeten letten. Daarna ga ik aan de
							slag om je wensen om te zetten in een perfect passend
							trainingschema.
						</p>
					</Steps>
					<Steps count="3">
						<h3>De training</h3>
						<p>
							Hier gaan we jouw op maat gemaakte schema trainen! Ik laat je zien
							hoe je de oefeningen uitvoert en waarom. Je mag alles aan me
							vragen en na afloop evalueren we de training.
						</p>
					</Steps>
					<Steps count="4" border={true}>
						<h3>Het plan</h3>
						<p>
							Als dit je allemaal aanspreekt en je net zoveel energie hebt om
							dit te gaan doen als ik dan gaan we ons samen 100% focussen om je
							doelen te halen.
						</p>
					</Steps>
				</StepsContainer>
			</ContentBlock>
			<Activation
				message="Laten we beginnen!"
				buttonText="Maak contact"
				onClick={props.modalHandler}
			/>
		</React.Fragment>
	);
};
export default Home;
