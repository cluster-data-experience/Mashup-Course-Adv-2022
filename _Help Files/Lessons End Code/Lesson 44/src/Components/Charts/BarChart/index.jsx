import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import { useNebula } from "../../../Context/Nebula";
import Loader from "../../Loader";
import { cloneDeep } from "lodash";

export default function BarChart({ id, style }) {
  const { app } = useNebula();
  const [data, setData] = useState();
  const [qlikData, setQlikData] = useState();
  const [finalOptions, setFinalOptions] = useState({
    baseOption: {
      color: [
        "#F98561",
        "#FDB949",
        "#427E89",
        "#38BC9A",
        "#9665CD",
        "#EE87BD",
        "#5176BD",
        "#55B6EB",
      ],
      title: {
        textStyle: {
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 24,
          color: "#0D3C44",
        },
      },
      label: {
        show: false,
      },
      tooltip: {
        show: true,
        textStyle: {
          fontFamily: "Source Sans Pro",
          fontStyle: "normal"
        },
      },
      grid: {
        bottom: "0",
        right: "1%",
        left: "1%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#97AEB2",
          },
        },
        axisLabel: {
          color: "#89A0A5",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 14,
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          lineStyle: {
            color: "#D2DCDD",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#97AEB2",
          },
        },
        axisLabel: {
          color: "#89A0A5",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 14,
        },
        splitLine: {
          lineStyle: {
            color: "#D2DCDD",
          },
        },
      },
      legend: {
        right: "4%",
        textStyle: {
          color: "#637B7B",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 13,
        },
        type: "scroll",
      },
      orientation: "horizontal",
      series: {
        default: {
          type: "bar",
        },
      },
    },
    media: [
      {
        query: {
          maxWidth: 368,
        },
        option: {
          legend: {
            top: "8%",
          },
          grid: {
            bottom: "10%",
          },
        },
      },
    ],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if( id && app ) {
        app.getObject(id).then(async (obj) => {
            const layout = await obj.getLayout();
            const { qHyperCube } = layout;
            const title = qHyperCube.qMeasureInfo[0].qFallbackTitle;
            setQlikData({
                title,
                hypercube: layout
            })
            setLoading(false);

            obj.on("changed", async () => {
                const layout = await obj.getLayout();
                const { qHyperCube } = layout;
                const title = qHyperCube.qMeasureInfo[0].qFallbackTitle;
                setQlikData({
                    title,
                    hypercube: layout
                })
            })

        })
    }
  }, [app, id]);

  //[qlikData] happens everytime qlikData changes. trigger data changes.
  useEffect(() => {
    if(qlikData){
        function extractData() {
            let dataPages = qlikData.hypercube.qHyperCube.qDataPages;
            let dimensionInfo = qlikData.hypercube.qHyperCube.qDimensionInfo;
            let measureInfo = qlikData.hypercube.qHyperCube.qMeasureInfo;
            let dataset = [[]];
            if (dataPages){
                //getting dimension and measure info
                dimensionInfo.forEach((dimension) => {
                    dataset[0].push(dimension.qFallbackTitle);
                });
                measureInfo.forEach((measure) => {
                    dataset[0].push(measure.qFallbackTitle);
                });

                //getting dimensions
                dataPages[0].qMatrix.forEach((item) => {
                    for (
                        let i = 0;
                        i < qlikData.hypercube.qHyperCube.qDimensionInfo.length;
                        i++
                    ) {
                        dataset.push([item[i].qText]);
                    }
                });

                //getting measures (adding value for each dimension)
                dataPages[0].qMatrix.forEach((item, index) => {
                    for (
                        let i = 0;
                        i < dimensionInfo.length + measureInfo.length;
                        i++
                    ) {
                        dataset[index + 1].push([item[i].qText]);
                    }
                });
            }
            setData(dataset);
        }
        extractData();
    }
  }, [qlikData]);

  //[data] happens everytime data changes. trigger finalOptions changes.
  useEffect(() => {
    if(data){

        function getSeriesStyle(serie, index) {
            let finalSerie = {};
            if(finalOptions.baseOption.series){
                if(finalOptions.baseOption.series[index]){
                    finalSerie = finalOptions.baseOption.series[index];
                } else {
                    finalSerie = finalOptions.baseOption.series.default
                    ? { ...finalOptions.baseOption.series.default }
                    : { type: "bar"};
                }
            } else {
                finalSerie = { type: "bar" };
            }
            finalSerie.name = serie.qFallbackTitle;
            return finalSerie;
        }

        const newOptions = cloneDeep(finalOptions);
        newOptions.baseOption.title = {
            ...newOptions.baseOption.title,
            text: qlikData.title
        }

        const series = [];
        const measureInfo = qlikData.hypercube.qHyperCube.qMeasureInfo;
        measureInfo.forEach((item, index) => {
            series.push(getSeriesStyle(item, index));
        });

        newOptions.baseOption.series = series;
        newOptions.baseOption.dataset = { source: data };

        setFinalOptions(newOptions);
        console.log("finalOptions", newOptions);
    }
  }, [data]);

  return (
    <div style={style ? style : { width: "100%", height: '300px', padding: '10px' }}>
      {loading ? (
        <Loader />
      ) : (
        <ReactEcharts
          notMerge={true}
          lazyUpdate={true}
          option={finalOptions}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
}
