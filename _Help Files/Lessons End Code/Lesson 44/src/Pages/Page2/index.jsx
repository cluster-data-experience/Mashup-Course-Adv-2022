import React, { useEffect, useState } from "react";
import { useNebula } from "../../Context/Nebula";

//components
import CustomKpi from "../../Components/CustomKpi";
import BarChart from "../../Components/Charts/BarChart";

const Page2 = () => {
  const { app } = useNebula();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getHCData(app){
      const properties = {
        qInfo: {qType: "visualization"},
        qHyperCubeDef: {
          "qStateName": "",
          "qDimensions": [],
          "qMeasures": [
            {
              "qLibraryId": "MWpNfJM",
              "qDef": {
                "qLabel": "",
                "qDescription": "",
                "qTags": [],
                "qGrouping": "N",
                "qDef": "",
                "qNumFormat": {
                  "qType": "F",
                  "qnDec": 2,
                  "qUseThou": 0,
                  "qFmt": "0%",
                  "qDec": ".",
                  "qThou": ","
                },
                "qRelative": false,
                "qBrutalSum": false,
                "qAggrFunc": "",
                "qAccumulate": 0,
                "qReverseSort": false,
                "qActiveExpression": 0,
                "qExpressions": [],
                "qLabelExpression": "",
                "autoSort": true,
                "cId": "XbGPQv",
                "numFormatFromTemplate": true,
                "conditionalColoring": {
                  "useConditionalColoring": true,
                  "singleColor": 1,
                  "segments": {
                    "limits": [],
                    "colors": [
                      {
                        "color": 2
                      }
                    ],
                    "paletteColors": [
                      {
                        "index": -1,
                        "color": "#7b7a78"
                      }
                    ]
                  },
                  "useBaseColors": false,
                  "paletteSingleColor": {
                    "index": -1,
                    "color": "#7b7a78"
                  }
                },
                "measureAxis": {
                  "min": 0,
                  "max": 100
                },
                "isCustomFormatted": false
              },
              "qSortBy": {
                "qSortByState": 0,
                "qSortByFrequency": 0,
                "qSortByNumeric": -1,
                "qSortByAscii": 0,
                "qSortByLoadOrder": 1,
                "qSortByExpression": 0,
                "qExpression": {
                  "qv": ""
                },
                "qSortByGreyness": 0
              },
              "qAttributeExpressions": [],
              "qAttributeDimensions": [],
              "qCalcCond": {
                "qv": ""
              },
              "qCalcCondition": {
                "qCond": {
                  "qv": ""
                },
                "qMsg": {
                  "qv": ""
                }
              },
              "qTrendLines": [],
              "qMiniChartDef": {
                "qDef": "",
                "qLibraryId": "",
                "qSortBy": {
                  "qSortByState": 0,
                  "qSortByFrequency": 0,
                  "qSortByNumeric": 0,
                  "qSortByAscii": 0,
                  "qSortByLoadOrder": 0,
                  "qSortByExpression": 0,
                  "qExpression": {
                    "qv": ""
                  },
                  "qSortByGreyness": 0
                },
                "qOtherTotalSpec": {
                  "qOtherMode": "OTHER_OFF",
                  "qOtherCounted": {
                    "qv": ""
                  },
                  "qOtherLimit": {
                    "qv": ""
                  },
                  "qOtherLimitMode": "OTHER_GT_LIMIT",
                  "qSuppressOther": false,
                  "qForceBadValueKeeping": true,
                  "qApplyEvenWhenPossiblyWrongResult": true,
                  "qGlobalOtherGrouping": false,
                  "qOtherCollapseInnerDimensions": false,
                  "qOtherSortMode": "OTHER_SORT_DESCENDING",
                  "qTotalMode": "TOTAL_OFF",
                  "qReferencedExpression": {
                    "qv": ""
                  }
                },
                "qMaxNumberPoints": -1,
                "qAttributeExpressions": [],
                "qNullSuppression": false
              }
            }
          ],
          "qInterColumnSortOrder": [
            0
          ],
          "qSuppressZero": false,
          "qSuppressMissing": true,
          "qInitialDataFetch": [
            {
              "qLeft": 0,
              "qTop": 0,
              "qWidth": 500,
              "qHeight": 10
            }
          ],
          "qReductionMode": "N",
          "qMode": "S",
          "qPseudoDimPos": -1,
          "qNoOfLeftDims": -1,
          "qAlwaysFullyExpanded": false,
          "qMaxStackedCells": 5000,
          "qPopulateMissing": false,
          "qShowTotalsAbove": false,
          "qIndentMode": false,
          "qCalcCond": {
            "qv": ""
          },
          "qSortbyYValue": 0,
          "qTitle": {
            "qv": ""
          },
          "qCalcCondition": {
            "qCond": {
              "qv": ""
            },
            "qMsg": {
              "qv": ""
            }
          },
          "qColumnOrder": [],
          "qExpansionState": [],
          "qDynamicScript": [],
          "qContextSetExpression": "",
          "customErrorMessage": {
            "calcCond": ""
          },
          "qLayoutExclude": {
            "qHyperCubeDef": {
              "qStateName": "",
              "qDimensions": [],
              "qMeasures": [],
              "qInterColumnSortOrder": [],
              "qSuppressZero": false,
              "qSuppressMissing": false,
              "qInitialDataFetch": [],
              "qReductionMode": "N",
              "qMode": "S",
              "qPseudoDimPos": -1,
              "qNoOfLeftDims": -1,
              "qAlwaysFullyExpanded": false,
              "qMaxStackedCells": 5000,
              "qPopulateMissing": false,
              "qShowTotalsAbove": false,
              "qIndentMode": false,
              "qCalcCond": {
                "qv": ""
              },
              "qSortbyYValue": 0,
              "qTitle": {
                "qv": ""
              },
              "qCalcCondition": {
                "qCond": {
                  "qv": ""
                },
                "qMsg": {
                  "qv": ""
                }
              },
              "qColumnOrder": [],
              "qExpansionState": [],
              "qDynamicScript": [],
              "qContextSetExpression": ""
            }
          }
        }
      };
      const model = await app.createSessionObject(properties);
      const layout = await model.getLayout();

      let newData = layout.qHyperCube.qDataPages[0].qMatrix[0];
      setData(newData);
    };
    if(app){
      getHCData(app);
      app.on("changed", (a) => {
        getHCData(app);
      })
    }
  }, [app]);

  return (
    <div className="page">
      <div className="row">
        <div className="col-lg-12">
          <div className="view-header">
            <div className="header-icon">
              <i className="material-icons"></i>
            </div>
            <div className="header-title">
              <h3>Sales Analysis</h3>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
              <CustomKpi id="ajMAEu" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
            <CustomKpi id="ajMAEu" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
              <span>{data ? data[0].qText : ""}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xs-12" style={{padding: 0}}>
        <div className="panel panel-filled" style={{height: "350px"}}>
          <div className="qvobject">
            <BarChart id="PBWVHyG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
