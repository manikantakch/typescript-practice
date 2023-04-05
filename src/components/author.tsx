import React,{useState,useEffect} from 'react';
import {Card,Image,Text} from '@chakra-ui/react';

interface AuthorObj  {
    bio:string,
    dateAdded:string,
    dateModified:string,
    description:string,
    link:string,
    name:string,
    quoteCount:number,
    slug:string,
    _id:string

}

type ResObj = {
    author: AuthorObj;
    

}

export const getProfileURL = ({author, size = 100}:any) => {
    const IMAGE_BASE = 'https://images.quotable.dev/profile'
    return `${IMAGE_BASE}/${size}/${author.slug}.jpg`
  }

const Author :React.FC<ResObj> = (props:ResObj):JSX.Element => {
    const {author} = props
    const [loaded, setLoaded] = useState(false)

  let fallbackImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'






    return (

        <>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    boxSize='100px'
    borderRadius='full'
    maxW={{ base: '100%', sm: '100px' }}
    src={"https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"}
    alt='Caffe Latte'
  />

<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='1xl'
  fontWeight='extrabold'
  textAlign={[ 'left','left' ]}
  
>
  {author.name}
</Text>


  </Card>
        
        </>
    )





}

export default Author