import * as React from "react";

export class ForecastedPurchases extends React.Component{
 render(){
   return(
     <div className="formGroup">
       <div className="formHeading">
         <p>forecasted purchases/ expenses</p>
       </div>
       <div>
         <div className="groupNumber first"></div>
         <div className="fieldGroup threeColumn">
           <div className={(this.props.errors.in_malta.valid || !this.props.errors.in_malta.touched ) ? "field" : "field errorField"}>
             <label className="fieldName">purchases/ expenses in malta</label>
             <input type="text" placeholder="purchases/ expenses in malta"
                     onBlur={this.props.checkForecastedPurchasesInMalta}
                     onChange={this.props.onChangeForecastedPurchasesInMalta}
                     value={this.props.data.in_malta}
             />
             <span className="errorText">{this.props.errors.in_malta['message']}</span>
           </div>
           <div className={(this.props.errors.within_eu.valid || !this.props.errors.within_eu.touched ) ? "field" : "field errorField"}>
             <label className="fieldName">purchases/ espenses within eu</label>
             <input type="text" placeholder="purchases/ espenses within eu"
                    onBlur={this.props.checkForecastedPurchasesWithinEU}
                    onChange={this.props.onChangeForecastedPurchasesWithinEU}
                    value={this.props.data.within_eu}
             />
             <span className="errorText">{this.props.errors.within_eu['message']}</span>
           </div>
           <div className={(this.props.errors.outside_eu.valid || !this.props.errors.outside_eu.touched ) ? "field" : "field errorField"}>
             <label className="fieldName">purchases/ expenses outside the eu</label>
             <input type="text" placeholder="purchases/ expenses"
                    onBlur={this.props.checkForecastedPurchasesOutsideEU}
                    onChange={this.props.onChangeForecastedPurchasesOutsideEU}
                    value={this.props.data.outside_eu}
             />
             <span className="errorText">{this.props.errors.outside_eu['message']}</span>
           </div>
         </div>
       </div>
     </div>
   )
 }
}
