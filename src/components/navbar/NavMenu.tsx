import { Button } from '../ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { MdPerson4 } from 'react-icons/md'

const NavMenu = () => {
    return(
        <section className='lg:hidden px-5 w-full pt-[42px] flex flex-col gap-[64px] absolute z-10 left-0 top-16  bg-white '>
            <div className='flex flex-col gap-8'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='collection'>
                            <AccordionTrigger>Collection</AccordionTrigger>
                            <AccordionContent>Shop All</AccordionContent>
                            <AccordionContent>Blouses & Tops</AccordionContent>
                            <AccordionContent>Pants</AccordionContent>
                            <AccordionContent>Dresses & Jumpsuits</AccordionContent>
                            <AccordionContent>Outwear & Jackets</AccordionContent>
                            <AccordionContent>Pullovers</AccordionContent>
                            <AccordionContent>Tees</AccordionContent>
                            <AccordionContent>Shorts & Skirts</AccordionContent>
                            <AccordionContent>Featured</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='new in'>
                            <AccordionTrigger>New In</AccordionTrigger>
                            <AccordionContent>Shop All</AccordionContent>
                            <AccordionContent>Blouses & Tops</AccordionContent>
                            <AccordionContent>Pants</AccordionContent>
                            <AccordionContent>Dresses & Jumpsuits</AccordionContent>
                            <AccordionContent>Outwear & Jackets</AccordionContent>
                            <AccordionContent>Pullovers</AccordionContent>
                            <AccordionContent>Shorts & Skirts</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='modiweek'>
                            <AccordionTrigger>Modiweek</AccordionTrigger>
                            <AccordionContent>Sunday</AccordionContent>
                            <AccordionContent>Monday</AccordionContent>
                            <AccordionContent>Tuesday</AccordionContent>
                            <AccordionContent>Wednesday</AccordionContent>
                            <AccordionContent>Thursday</AccordionContent>
                            <AccordionContent>Friday</AccordionContent>
                            <AccordionContent>Saturday</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='plus size'>
                            <AccordionTrigger>Plus Size</AccordionTrigger>
                            <AccordionContent>Shop All</AccordionContent>
                            <AccordionContent>Blouses & Tops</AccordionContent>
                            <AccordionContent>Pants</AccordionContent>
                            <AccordionContent>Dresses & Jumpsuits</AccordionContent>
                            <AccordionContent>Outwear & Jackets</AccordionContent>
                            <AccordionContent>Pullovers</AccordionContent>
                            <AccordionContent>Tees</AccordionContent>
                            <AccordionContent>Shorts & Skirts</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='sustainability'>
                            <AccordionTrigger>Sustainability</AccordionTrigger>
                            <AccordionContent>Mission</AccordionContent>
                            <AccordionContent>Processing</AccordionContent>
                            <AccordionContent>Materials</AccordionContent>
                            <AccordionContent>Packaging</AccordionContent>
                            <AccordionContent>Product Care</AccordionContent>
                            <AccordionContent>Our Suppliers</AccordionContent>
                        </AccordionItem>
                    </Accordion>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-gray-300 w-full h-0.5'></div>
                <div className='flex gap-6'>
                    <Button variant='outline' size='m'>
                        <MdPerson4 className='text-black' />
                        <span>Log in</span>
                    </Button>
                    <Button variant='outline' size='m'>Create Account</Button>
                </div>
            </div>
        </section>
        
    )
}

export default NavMenu