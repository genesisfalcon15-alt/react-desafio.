import React from "react";
//// aqui el import de navbar//
/// aqui el jumbotrom////




import Card from "./Card";
import Footer from "./Footer";


const Home = () => {

	const cardsDatos = [

		{
			id: 1,
			image: "https://placehold.co/500x325",
			title: "Carta Uno",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		},

		{
			id: 2,
			image: "https://placehold.co/500x325",
			title: "Carta Dos",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		},

		{
			id: 3,
			image: "https://placehold.co/500x325",
			title: "Carta Tres",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		},

		{
			id: 4,
			image: "https://placehold.co/500x325",
			title: "Carta Cuatro",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		},
	];




	return (
		<div className="text-center">
			{/* aqui va el navbar y el jumbotrom*/}








			<div className="container mt-5">
				<div className="row">
					{cardsDatos.map((card) => (
						<Card
							key={card.id}
							image={card.image}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
			</div>
			<Footer />





		</div>
	);
};

export default Home;