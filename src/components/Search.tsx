import { useState } from 'react';
import { Button, Card, Flex, Grid, Heading, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';
import useGeneral from '../store/general';
import ReactJson from 'react-json-view';
import logo from '../assets/logo.png';
import * as ScrollArea from "@radix-ui/react-scroll-area";

const Search = () => {
    const defaultJSON: any = [
        {
            "token": "Maharashtra",
            "canonical-name": "maharashtra",
            "table": "state"
        },
        {
            "token": "Ahmedabad",
            "canonical-name": "ahmedabad",
            "table": "city"
        },
        {
            "token": "New Zealand",
            "canonical-name": "new zealand",
            "table": "country"
        }
    ]

    const isMobile = useGeneral((state: any) => state.isMobile);
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(defaultJSON);
    const handleClearInput = () => {
        setInputValue('');
    };

    return (
        <Grid columns={`${isMobile ? `1` : `2`} auto`} width={`100%`} align="center">
            <Flex direction="column" gap="6" className="" width={`100%`}>
                <img src={logo} className={`${isMobile ? `w-[90vw]` : `w-[400px]`}  h-auto mt-5`} />
                <Flex className={`opacity-80 ${isMobile ? `mt-10 p-5 w-[100vw]` : `p-8 w-[50vw]`}`} gap={"4"}>
                    <TextField.Root className={`flex items-center gap-2 ${isMobile ? `w-[60vw]` : `w-[50vw]`}`}>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                        <TextField.Input
                            className="cursor-color-gray-11"
                            size="3"
                            placeholder="Enter a Sentence..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <TextField.Slot>
                            <Button variant='ghost' radius='full' onClick={handleClearInput}>
                                <Cross1Icon height="16" width="16" />
                            </Button>
                        </TextField.Slot>
                    </TextField.Root>
                    <Button size="4">Search</Button>
                </Flex>
                <Card
                    variant="classic"
                    className={`${isMobile ? `mt-4 place-self-center w-[90vw]` : `ml-8 w-[46vw]`}`}
                >
                    <Flex direction={`column`} width={'100%'} gap="4">
                        <Heading size="6">JSON Response</Heading>
                        <ScrollArea.Root className="w-full h-[40vh] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-white">
                            <ScrollArea.Viewport className="w-full h-full rounded">
                                <ReactJson src={data} theme={`monokai`} />
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="vertical"
                            >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="horizontal"
                            >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Corner className="bg-blackA5" />
                        </ScrollArea.Root>
                    </Flex>
                </Card>
            </Flex>
        </Grid>
    );
}

export default Search;
