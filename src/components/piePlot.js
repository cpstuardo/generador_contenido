import { Pie } from "@nivo/pie";

const MyPie = ({ data }) => (
  <Pie
    data={data}
    height={350}
    width={300}
    margin={{ top: -30, right: 65, bottom: 70, left: 75 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={5}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={1}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={1.5}
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
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 65,
        itemHeight: 18,
        itemTextColor: "#333333",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
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
