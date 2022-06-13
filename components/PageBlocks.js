import TextBlock from './TextBlock';
import TextVisual from './TextVisual';
import Tickets from './Tickets';
import Hero from './Hero';
import PlaceHolder from './PlaceHolder';
import Video from './Video';
import Faq from './Faq';
import Stats from './Stats';

export default function PageBlocks({ content }){
    
    const pageBlocks = Array.from(content);
    const renderOutput = pageBlocks.map((pageBlock, i) => {
        switch(pageBlock.__typename){
            case "pageBlocks_hero_BlockType":
                return <Hero key={pageBlock.id} content={pageBlock} />
            case "pageBlocks_text_BlockType":
                return <TextBlock 
                        key={pageBlock.__typename + ' ' + i} 
                        heading={pageBlock.heading} 
                        content={pageBlock.column1} 
                    />
            case "pageBlocks_textVisual_BlockType":
                return <TextVisual 
                        key={pageBlock.__typename + ' ' + i}  
                        content={pageBlock}
                    />
            case "pageBlocks_speakers_BlockType":
                return <PlaceHolder key={pageBlock.__typename} heading="Speakers" />
            case "pageBlocks_sponsors_BlockType":
                return <PlaceHolder key={'spons'} heading="Sponsors" />
            case "pageBlocks_stats_BlockType":
                return <Stats key={'stats'} content={pageBlock} statistics={pageBlock.stats} />
            case "pageBlocks_faq_BlockType":
                return <Faq key={'faq'} content={pageBlock} />
            case "pageBlocks_sessions_BlockType":
                return <PlaceHolder key={'sessions'} heading="Sessions" />
            case "pageBlocks_blocks_BlockType":
                return <PlaceHolder key={'blocks' + ' ' + pageBlock.id} heading="Blocks" />
            case "pageBlocks_video_BlockType":
                return <Video key={'video'} content={pageBlock} />
            case "pageBlocks_tickets_BlockType":
                return <Tickets key={'tickets'} heading={pageBlock.heading} tickets={pageBlock.tickets} />
            default: 
                return;
        }
    })

    return renderOutput;

}
