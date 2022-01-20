import intro from '../styles/intro.module.css'
import Image from 'next/image'

export default function IntroImage () {
    return (
        <div className={intro[`intro-image`]}>
            <Image 
                src={require('../../public/assets/gif/tenwi.gif')}
                objectFit="cover"
            ></Image>
        </div>
    )
}