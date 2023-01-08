import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import { tokens } from "../../theme";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from "react";


const Calendar = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ currentEvents, setCurrentEvents ] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("please enter a new title");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if(window.confirm(`Do you want to delete it '${selected.event.title}'`)){
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="Calender" subTitle="Full Calender" />
            <Box display="flex" justifyContent="space-between">
                {/*Calender sidebar*/}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500], margin:"10px 0", borderRadius: "2px", }}>
                                <ListItemText primary={event.title} secondary={
                                    <Typography>
                                        { formatDate(event.start,{
                                            year:"numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </Typography>
                                } 
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/*calendar*/}
                <Box flex="1 1 100% " ml="15px">
                    <FullCalendar 
                        height="65vh" 
                        plugins={[ 
                            dayGridPlugin, 
                            timeGridPlugin, 
                            interactionPlugin,
                            listPlugin, 
                        ]} 
                        headerToolbar = {{ 
                            left: "prev,next today", 
                            center: "title", 
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth", 
                        }}
                        initialView="dayGridMonth" 
                        editable={true} 
                        selectable={true} 
                        selectMirror={true} 
                        dayMaxEvents={true} 
                        select={handleDateClick} 
                        eventClick={handleEventClick} 
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents = {[
                            { 
                                id:"12315", 
                                title:"All-day event", 
                                date:"2022-11-05", 
                            },
                            { 
                                id:"5123", 
                                title:"College reopening", 
                                date:"2022-11-06", 
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;