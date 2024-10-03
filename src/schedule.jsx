import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler } from "@bitnoi.se/react-scheduler"

let data = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      title: "Educator1",
      subtitle: "timetable"
    },
    data: [
      {
        id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T08:16:31.123Z"),
        endDate: new Date("2024-10-03T21:55:23.582Z"),
        occupancy: 1,
        title: "Event A",
        subtitle: "Subtitle A",
        description: "Description A",
        bgColor: "rgb(254,165,177)"
      },
      {
        id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T05:16:31.123Z"),
        endDate: new Date("2024-10-03T15:55:23.582Z"),
        occupancy: 1,
        title: "Event B",
        subtitle: "Subtitle B",
        description: "Description B",
        bgColor: "rgb(254,165,177)"
      },
    ],
  },
  {
    id: "070ac5b5-8369-d4cd2-8ba2-0a209130cc60",
    label: {
      title: "Educator2",
      subtitle: "timetable"
    },
    data: [
      {
        id: "22fbe237-63d44-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T08:16:31.123Z"),
        endDate: new Date("2024-10-03T21:55:23.582Z"),
        occupancy: 1,
        title: "Event A",
        subtitle: "Subtitle A",
        description: "Description A",
        bgColor: "rgb(1,165,177)"
      },
      {
        id: "22fbe237-634d4-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T21:05:31.123Z"),
        endDate: new Date("2024-10-03T23:32:23.582Z"),
        occupancy: 1,
        title: "Event B",
        subtitle: "Subtitle B",
        description: "Description B",
        bgColor: "rgb(1,165,177)"
      },
    ],
  },
  {
    id: "070ac5b5-8369-d4cd2-8ba2-0a209130cc60",
    label: {
      title: "Group1",
      subtitle: "timetable"
    },
    data: [
      {
        id: "22fbe237-d63d44-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T03:16:31.123Z"),
        endDate: new Date("2024-10-03T05:35:23.582Z"),
        occupancy: 1,
        title: "Event A",
        subtitle: "Subtitle A",
        description: "Description A",
        bgColor: "rgb(1,250,177)"
      },
      {
        id: "22fbe2fds37-634d4-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T08:16:31.123Z"),
        endDate: new Date("2024-10-03T15:55:23.582Z"),
        occupancy: 1,
        title: "Event B",
        subtitle: "Subtitle B",
        description: "Description B",
        bgColor: "rgb(1,250,177)"
      },
    ],
  },
  {
    id: "070ac5b5-8369-d4cd2-8ba2-0a209130cc60",
    label: {
      title: "Group1",
      subtitle: "timetable"
    },
    data: [
      {
        id: "22fbeasdkp237-d63d44-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T09:16:31.123Z"),
        endDate: new Date("2024-10-03T12:55:23.582Z"),
        occupancy: 1,
        title: "Event A",
        subtitle: "Subtitle A",
        description: "Description A",
        bgColor: "rgb(121,250,0)"
      },
      {
        id: "22fbeasd2fds37-634d4-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-03T11:16:31.123Z"),
        endDate: new Date("2024-10-03T15:55:23.582Z"),
        occupancy: 1,
        title: "Event B",
        subtitle: "Subtitle B",
        description: "Description B",
        bgColor: "rgb(121,250,0)"
      },
    ],
  }
];

export default function Schedule() {
  return (
    <Scheduler
      // decide when to show loading indicators
      isLoading={false}
      // your data
      data={data}
      // callback when user click's on one of the grid's tile
      onItemClick={(clickedItem) => alert(clickedItem.label)}
      onTileClick={(clickedTile) => alert(clickedTile.label)}
      // filter function that let's you handling filtering on your end
      onFilterData={() => {
        // filter your data
      }}
      // callback when user clicks clearing filter button
      onClearFilterData={() => {
        // clear all your filters
      }}
      config={{
        filterButtonState: 0,
        showTooltip: false,
        zoom: 2,
        lang: "en",
        maxRecordsPerPage: 20,
      }}
    />
  );
}
