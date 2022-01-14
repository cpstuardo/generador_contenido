import { Pie } from "@nivo/pie";

const MyPie = ({ data }) => (
  <Pie
    data={data}
    height={350}
    width={300}
    margin={{ top: -100, right: 65, bottom: 70, left: 70 }}
    innerRadius={0.5}
    padAngle={2}
    cornerRadius={5}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={1}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={6}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 50,
        itemsSpacing: 5,
        itemWidth: 65,
        itemHeight: 18,
        itemTextColor: "#333333",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 15,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
    isInteractive={false}
  />
);

export default MyPie;
