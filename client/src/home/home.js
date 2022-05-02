import React from 'react';

import './Home.scss';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import Dropdown from '../components/Dropdown/Dropdown';
import HorizontalItems from '../components/HorizontalItems/HorizontalItems';

const packages = [
	{
		packages: [
			{
				id: Math.random(),
				title: 'Light focus',
				services: [
					'1x 60 min personal training',
					'Privé trainingsruimte',
					'Op maat gemaakt schema',
					'2x optie tot verzetten',
				],
				price: 480,
			},
			{
				id: Math.random(),
				title: 'Fair focus',
				services: [
					'2x 60 min personal training',
					'Privé trainingsruimte',
					'Op maat gemaakt schema',
					'Voedingstips',
					'Planning',
					'1RM test',
					'Verzetten tot 24 uur voor de training',
				],
				price: 1120,
			},
			{
				id: Math.random(),
				title: 'Total focus',
				services: [
					'2x 60 min personal training',
					'Privé trainingsruimte',
					'Op maat gemaakt schema',
					'Berekening van energiebehoefte en eetschema',
					'Planning',
					'1RM test',
					'Verzetten tot 12 uur voor de training',
					'Tussentijdse-evaluatie',
				],
				price: 1280,
			},
			,
			{
				id: Math.random(),
				title: 'Hyper focus',
				services: [
					'2x 90 min personal training',
					'Privé trainingsruimte',
					'Op maat gemaakt schema',
					'Online voedingsdagboek',
					'Uitgebreide trainingsplanning',
					'1RM test',
					'Verzetten tot 1 uur voor de training',
					'Tussentijdse-evaluatie',
					'15 min bijpraten of vragen stellen',
					'24/7 vragen stellen via whatsapp',
					'Sporthanddoek met je eigen naam',
				],
				price: 1440,
			},
		],
	},
];

const Home = () => {
	return (
		<React.Fragment>
			<ContentBlock backgroundImage="/SMALL/1V0A4066.jpg">
				<h2>Trainen met volle focus</h2>
				<p>Wat zou je kunnen bereiken als je je vol focust op je doelen?</p>
				<p>
					Als je echt uitspreekt wat je verlangt op het gebied van fitheid en
					gezondheid?
				</p>
			</ContentBlock>
			<ContentBlock>
				<p>De eerste stap is het zeggen. Daarna vraag ik nog 1 ding van je:</p>
			</ContentBlock>
			<ContentBlock backgroundImage="/SMALL/1V0A4435.jpg">
				<div className="title-container__fullwidth">
					<h3 className="title__fullwidth">COMMITMENT</h3>
				</div>
			</ContentBlock>
			<ContentBlock>
				<blockquote>
					Jij committeert je aan jouw doelen. En committeer me aan jouw.
				</blockquote>
			</ContentBlock>
			<ContentBlock>
				<h2>
					<strong>100%</strong>
				</h2>
			</ContentBlock>
			<ContentBlock>
				<p>
					Want jij verdient de zorg van een docent en de kennis van een
					professional.
				</p>

				<p>
					Zodat jij je doelen op de allerbeste manier haalt. En je zal ervaren
					dat je altijd net iets meer kunt, dan je denkt.
				</p>

				<p>
					Zie je jouw doel voor je, én alvast je volgende doel. Want dankzij
					jouw focus en commitment stijg jij binnen. No time boven jezelf uit.
					Beloofd.
				</p>
			</ContentBlock>
			<ContentBlock>
				<Dropdown title="Je krijgt de zorg van een docent en de kennis van een pro.">
					<ul>
						<li>
							van persoonlijke communicatie tot een parkeren voor de deur en
							trainen in een privé ruimte. Ik zorg dat jij je op alle fronten
							vol kan focussen op jouw doelen.
						</li>
						<li>
							De beste docent geeft je een gevoel van vertrouwen. En zorgt dat
							jij veilig bent.
						</li>
						<li>
							Ik draag mijn kennis zo over dat je echt begrijpt waarom en wat je
							traint. Daarmee houd je je commitment langer vast
						</li>
					</ul>
				</Dropdown>
				<Dropdown title="Jij kunt altijd net iets meer dan je nu denkt. Dat ervaar je elke training.">
					<ul>
						<li>
							Ik geniet ervan als mijn trainees verbaasd zijn over wat ze zelf
							kunnen. Een gewicht optillen waarvan gedacht werd dat het
							onmogelijk was, of juist iets veel simpelers als weer balanceren
							op 1 been.
						</li>
						<li>
							Juist door persoonlijk en op maat te trainen bescherm je jezelf
							voor blessures én ongewenste blootstellingen die je wel in de
							sportschool hebt.
						</li>
						<li>
							Door met mij samen te werken, zie jij scherp wat je straks kan.
						</li>
					</ul>
				</Dropdown>
				<Dropdown title="Jij committeert je aan jouw doelen, en ik committeer me aan jou.">
					<ul>
						<li>
							We werken altijd vanuit de waarom. Dit is de grootste basis voor
							jouw commitment
						</li>
						<li>
							Sporters mogen veel eisen van hun coach. En jij dus ook van mij.
							Het is jouw lijf en jouw gezondheid, die staan op #1
						</li>
						<li>
							Waar jij nu ook bent qua fitheid, je boekt altijd progressie.
						</li>
						<li>
							Ik luister naar wat je zegt en doe daar wat mee. Feedback is
							belangrijk zeker als jouw motivatie daardoor groeit.{' '}
						</li>
					</ul>
				</Dropdown>
			</ContentBlock>
			<ContentBlock>
				<HorizontalItems items={packages} />
			</ContentBlock>
		</React.Fragment>
	);
};
export default Home;
