import React from "react";
//// aqui el import de navbar//
/// aqui el jumbotrom////




import Card from "./Card";
import Footer from "./Footer";


const Home = () => {
	return (
		<div className="text-center">
			{/* aqui va el navbar y el jumbotrom*/}








			<div className="container mt-5">
				<div className="row">
					<Card
						image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-solid-color-on-gray-background-image_557017.jpg"
						title="Carta uno"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>

					<Card
						image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-solid-color-on-gray-background-image_557017.jpg"
						title="Carta Dos"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>


					<Card
						image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-solid-color-on-gray-background-image_557017.jpg"
						title="Carta Tres"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>

					<Card
						image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-solid-color-on-gray-background-image_557017.jpg"
						title="Carta Cuatro"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>

				</div>
			</div>
			<Footer />





		</div>
	);
};

export default Home;