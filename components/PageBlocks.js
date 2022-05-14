import TextBlock from './TextBlock';
import TextVisual from './TextVisual';
import Tickets from './Tickets';
import Hero from './Hero';
import PlaceHolder from './PlaceHolder';

export default function PageBlocks(props){

    const pageBlocks = Array.from(props.content);
    const Output = pageBlocks.map((pageBlock, i) => {
        switch(pageBlock.__typename){
            case "pageBlocks_hero_BlockType":
                return <Hero 
                        key={pageBlock.__typename + ' ' + i} 
                        heading="Hero" 
                        eyebrow={pageBlock.eyebrow}
                    />
            case "pageBlocks_text_BlockType":
                return <TextBlock 
                        key={pageBlock.__typename + ' ' + i} 
                        heading={pageBlock.heading} 
                        content={pageBlock.column1} 
                    />
            case "pageBlocks_textVisual_BlockType":
                return <TextVisual 
                        key={pageBlock.__typename + ' ' + i} 
                        textVisualHeading={pageBlock.textVisualHeading}
                        textVisualContent={pageBlock.textVisualContent}    
                    />
            case "pageBlocks_speakers_BlockType":
                return <PlaceHolder key={'speaker'} heading="Speakers" />
            case "pageBlocks_sponsors_BlockType":
                return <PlaceHolder key={'spons'} heading="Sponsors" />
            case "pageBlocks_stats_BlockType":
                return <PlaceHolder key={'stats'} heading="Stats" />
            case "pageBlocks_faq_BlockType":
                return <PlaceHolder key={'faq'} heading="Faq" />
            case "pageBlocks_sessions_BlockType":
                return <PlaceHolder key={'sessions'} heading="Sessions" />
            case "pageBlocks_blocks_BlockType":
                return <PlaceHolder key={'blocks'} heading="Blocks" />
            case "pageBlocks_video_BlockType":
                return <PlaceHolder key={'video'} heading="Video" />
            case "pageBlocks_tickets_BlockType":
                return <Tickets key={'tickets'} heading={pageBlock.heading} tickets={pageBlock.tickets} />
            default: 
                return null
        }
    })

    return Output;

}
