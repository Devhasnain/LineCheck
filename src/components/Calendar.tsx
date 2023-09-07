import React, { useLayoutEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { baseRoute } from '@/utils/route'

const Calendar = () => {
  function renderEventContent(eventInfo:any) {
    console.log('titleayega',eventInfo.event._def)
    return (
           <div className="">
            {/* <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <button>123</button>
      </div> */}
      <div className="rounded-3xl absolute bg-white  right-0 flex justify-center items-center flex-col top-8 h-[60px] w-[80px]">
                <h1 className='text-[16px] font-medium'>10-05</h1>
                <p className='text-[12px] text-[#585C5C]'>min</p>
            </div>
           </div>
    );
  }
  // function renderEventContent(eventInfo:any) {
  //   return (
  //     <div>
  //       <b>{eventInfo.timeText}</b>
  //       <i>{eventInfo.event.title}</i>
  //       <button>123</button>
  //     </div>
  //   );
  // }
 const  handleEventClick = (clickInfo:any) => {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
    alert('ok')
  };
  const [AllDates,setDates]=useState([])
  useLayoutEffect(()=>{
    const fect=()=>{
      var requestOptions:any = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${baseRoute}barsDates/${2}`, requestOptions)
        .then(response => response.json())
        .then((result) => {
          setDates(result.data)
          console.log(result)})
        .catch(error => console.log('error', error));
    }
    fect()
  },[])
  console.log('AllDates',AllDates)
  return (
    <div>
         <FullCalendar
          plugins={[
            dayGridPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          // nowIndicator={true}
          // editable={true}
          // selectable={true}
          // selectMirror={true}
          events={AllDates}
          // events={[
          //   {
          //     title: 'All Day Event',
          //     start: '2023-09-01'
          //   },
          //   {
          //     title: 'one Day Event',
          //     start: '2023-09-02'
          //   },
           
          // ]}
          eventContent={renderEventContent} 
          // eventClick={handleEventClick}
          // initialEvents={[
          //   // { title: 'nice event', start: new Date(), resourceId: 'a' },
          //   { title: 'event 1', end: '2023-09-03' },
          // ]}
        />
    </div>
  )
}

export default Calendar