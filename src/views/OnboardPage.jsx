import { IonButton, IonContent, IonIcon, IonPage, IonRow, IonSlides } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { useRef, useState } from 'react';
import OnboardingSlide from '../component/OnboardingSlide';

const OnboardPage = () => {
    const sliderRef = useRef();
	const [ lastSlide, setLastSlide ] = useState(false);
	const [ firstSlide, setFirstSlide ] = useState(true);

    const slideContent = [
		{
			image: "../src/assets/images/onboard/ecommerce.png",
			mainSlide: true,
			title: "-- Marketplace --",
			text: "Explore Our Marketplace, discover, shop and elevate your business."
		},
		{
			image: "../src/assets/images/onboard/logistics.png",
			title: "-- Logistics --",
			text: "Streamline your delivery with our marketplace solutions."
		},
		{
			image: "/assets/applogo3.png",
			title: "Organize",
			text: "Organize photos exactly how you want them"
		},
		{
			image: "/assets/applogo4.png",
			title: "Share",
			finalSlide: true,
			text: "Are you ready to share your special moments online with the world?"
		}
	];


    const checkSlides = async () => {

		const isLastSlide = await sliderRef.current.isEnd();
		const isFirstSlide = await sliderRef.current.isBeginning();
		setLastSlide(isLastSlide);
		setFirstSlide(isFirstSlide);
	}

    return (

        <IonPage>
        <IonContent fullscreen>

            <IonSlides onIonSlideWillChange={ checkSlides } pager={ true } ref={ sliderRef } id="slider" options={{ slidesPerView: "auto", zoom: true, grabCursor: true }}>

                { slideContent.map((slide, index) => {

                    return <OnboardingSlide key={ index } { ...slide } lastSlide={ lastSlide } sliderRef={ sliderRef } />;
                })}
            </IonSlides>

            <IonRow className="slide-buttons">
                { !firstSlide &&
                        <IonButton fill="clear" onClick={ () => sliderRef.current.slidePrev() }>
                            <IonIcon icon={ arrowBack } />
                        </IonButton>
                }

                { !lastSlide &&
                    <IonButton fill="clear" onClick={ () => sliderRef.current.slideNext() }>
                        <IonIcon icon={ arrowForward } />
                    </IonButton>
                }
            </IonRow>
        </IonContent>
    </IonPage>
    )
}


export default OnboardPage;