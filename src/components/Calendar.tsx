import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  function renderEventContent(eventInfo:any) {
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
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          events={[
            {
              title: 'All Day Event',
              start: '2023-07-01'
            },
            {
              title: 'Long Event',
              start: '2023-07-07',
              end: '2023-07-10',
              color: 'purple' // override!
            },
            {
              groupId: '999',
              title: 'Repeating Event',
              start: '2023-07-09T16:00:00'
            },
            {
              groupId: '999',
              title: 'Repeating Event',
              start: '2023-07-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2023-07-11',
              end: '2023-07-13',
              color: 'purple' // override!
            },
            {
              title: 'Meeting',
              start: '2023-07-12T10:30:00',
              end: '2023-07-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2023-07-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2023-07-12T14:30:00'
            },
            {
              title: 'Birthday Party',
              start: '2023-07-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'https://google.com/',
              start: '2023-07-28'
            }
          ]}
          eventContent={renderEventContent} 
          eventClick={handleEventClick}
          // resources={[
          //   { id: 'a', title: 'Auditorium A' },
          //   { id: 'b', title: 'Auditorium B', eventColor: 'green' },
          //   { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          // ]}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'a' }
          ]}
        />
    </div>
  )
}

export default Calendar