import React from "react";
import Select from "react-select";
import ReactTooltip from 'react-tooltip'
import { MCustomScrollBar } from './../MCustomScrollBar'

export class CorporateMemberFillInDetails extends React.Component {
  render() {
    return (
      <div className="addForm">
        <form action="">
          <div className="withSideMenu clearAfter">
            <div className="sideMenu itemsList pt20 pl20">
              <div className="scrollArea">
                <MCustomScrollBar>
                  <ul>
                    <li className="folder toggleParent">
                      <span className="itemBtn">John Doe</span>
                      <span className="icon-ic_dots toggleBtn menuBtn"></span>
                      <div className="field menuField toggleArea">
                        <div className="Select-menu-outer">
                          <div className="Select-menu">
                            <a className="Select-option" >add corporate owner</a>
                            <a className="Select-option" role="option">edit corporate owner</a>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="folder toggleParent">
                          <span className="itemBtn">John Doe</span>
                          <span className="icon-ic_dots toggleBtn menuBtn"></span>
                          <div className="field menuField toggleArea">
                            <div className="Select-menu-outer">
                              <div className="Select-menu">
                                <a className="Select-option" >Edit</a>
                                <a className="Select-option" role="option">Delete</a>
                              </div>
                            </div>
                          </div>
                          <ul className="noChild">
                            <li className="toggleParent">
                              <a className="itemLink">John Doe</a>
                              <span className="icon-ic_dots toggleBtn menuBtn"></span>
                              <div className="field menuField toggleArea">
                                <div className="Select-menu-outer">
                                  <div className="Select-menu">
                                    <a className="Select-option" >add corporate owner</a>
                                    <a className="Select-option" role="option">edit corporate owner</a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </MCustomScrollBar>
              </div>
            </div>

            <div className="contSideMenu">
              <h2 className="title borderB blueB"><strong>John Doe </strong> details</h2>

              <div className="formGroup">
                <div className="fieldGroup threeColumn pb0">
                  <div className="field">
                    <label className="fieldName">registered address </label>
                    <input type="text" placeholder="registered address" />
                  </div>
                  <div className="field">
                    <label className="fieldName">regitrated no.</label>
                    <input type="text" placeholder="regitrated no." />
                  </div>
                  <div className="field">
                    <label className="fieldName">registration date</label>
                    <input type="text" placeholder="registration date" />
                  </div>
                </div>
                <div className="fieldGroup threeColumn pt0">
                  <div className="field">
                    <label className="fieldName">Company name</label>
                    <input type="text" placeholder="Company name" />
                  </div>
                  <div className="field">
                    <label className="fieldName">incorporation place</label>
                    <input type="text" placeholder="incorporation place" />
                  </div>
                </div>
              </div>

              <div className="formGroup">
                <div className="formHeading">
                  <p>documents to upload</p>
                </div>
                <div className="fieldGroup threeColumn pb0">
                  <div className="field">
                    <label className="fieldName">Company certificate of incorporation  <span className="circleBtn grey ml10 tooltip" data-tip="must not bi expired" data-for="blue"></span></label>
                    <ReactTooltip place="bottom" className="blue" type="light" effect="solid" id="blue"/>
                    <label className="fileField">
                      <input type="file" id="agreement" />
                      <input type="text"  placeholder="upload" />
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <p className="fieldLink"><a href="#" className="link mr15">View</a><a href="#" className="link">Ask for a change</a></p>
                  </div>
                  <div className="field">
                    <label className="fieldName">Company memorandum <span className="circleBtn grey ml10 tooltip" data-tip="must not bi expired" data-for="blue"></span></label>
                    <label className="fileField">
                      <input type="file" id="agreement" />
                      <input type="text"  placeholder="upload" />
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <p className="fieldLink"><a href="#" className="link">Ask for a change</a></p>
                  </div>
                  <div className="field">
                    <label className="fieldName">Bank reference letter <a className="icon icon-ic_attached_file  blue ml10 tooltip" data-tip="Click for sample bank reference letter (see attached)" data-for="blue"></a></label>
                    <label className="fileField">
                      <input type="file" id="agreement" />
                      <input type="text"  placeholder="upload" />
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <p className="fieldLink"><a href="#" className="link">Ask for a change</a></p>
                  </div>
                </div>
                <div className="fieldGroup threeColumn pt0">
                  <div className="field">
                    <label className="fieldName">Latest financial statements <span className="circleBtn grey ml10 tooltip" data-tip="must not bi expired" data-for="blue"></span></label>
                    <label className="fileField">
                      <input type="file" id="agreement" />
                      <input type="text"  placeholder="upload" />
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <p className="fieldLink"><a href="#" className="link">Ask for a change</a></p>
                  </div>
                  <div className="field">
                    <label className="fieldName">Good standing certificate </label>
                    <label className="fileField">
                      <input type="file" id="agreement" />
                      <input type="text"  placeholder="upload" />
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <p className="fieldLink"><a href="#" className="link">Ask for a change</a></p>
                  </div>
                </div>
              </div>

              <div className="formGroup">
                <div className="formHeading">
                  <p>issued share capital</p>
                </div>
                <div>
                  <div className="fieldGroup threeColumn pb0">
                    <div className="field">
                      <label className="fieldName">number of shares</label>
                      <input type="text" placeholder="input number" />
                    </div>
                    <div className="field select">
                      <label className="fieldName">type of share</label>
                      <Select
                        value=""
                        options=""
                        onChange=""
                        clearable={false}
                        placeholder="type of share"
                      />
                    </div>
                    <div className="field">
                      <label className="fieldName">% paid up</label>
                      <input type="text" placeholder="input number" />
                    </div>
                  </div>
                  <div className="fieldGroup threeColumn pt0">
                    <div className="field">
                      <label className="fieldName">valuer per share</label>
                      <input type="text" placeholder="input number" />
                    </div>
                    <div className="field">
                      <label className="fieldName">incorporation place</label>
                      <input type="text" placeholder="registration date" />
                    </div>
                    <div className="field">
                      <label className="fieldName">document to upload</label>
                      <label className="fileField">
                        <input type="file" id="agreement" />
                        <input type="text"  placeholder="upload" />
                        <span className="icon icon-upload blue"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="addNewGroup">
                  <div className="btnSpace">
                    <ReactTooltip place="bottom" className="green" type="light" effect="solid" id="green"/>
                    <button type="button" className="circleBtn green tooltip btnBg" data-tip="replicate above row"  data-for="green"></button>
                  </div>
                </div>
              </div>

              <div className="formGroup">
                <div className="formHeading">
                  <p>owners (<strong>corporate</strong> shareholders)</p>
                </div>
                <div>
                  <div className="fieldGroup threeColumn">
                    <div className="field">
                      <label className="fieldName">corporate shareholder</label>
                      <input type="text" placeholder="corporate shareholder" />
                    </div>
                    <div className="field">
                      <div className="pt10">
                        <button type="button" className="circleBtn green tooltip btnBg" data-tip="add new owner"  data-for="green"></button>
                      </div>
                    </div>
                  </div>
                  <ul className="listInfo mb60">
                    <li>
                      <div className="groupNumber noBorder"><button type="button" className="cancelForm"><i className="icon icon-remove"></i></button></div>
                      <p className="smallTitle  pt25 pb25">glen azzopardi</p>
                    </li>
                    <li>
                      <div className="groupNumber noBorder"><button type="button" className="cancelForm"><i className="icon icon-remove"></i></button></div>
                      <p className="smallTitle  pt25 pb25">glen azzopardi</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="formGroup">
                <div className="formHeading">
                  <p>owners (<strong>individual</strong> shareholders)</p>
                </div>
                <div>
                  <div className="fieldGroup threeColumn">
                    <div className="field">
                      <label className="fieldName">corporate shareholder</label>
                      <input type="text" placeholder="corporate shareholder" />
                    </div>
                    <div className="field">
                      <div className="pt10">
                        <button type="button" className="circleBtn green tooltip btnBg" data-tip="add new owner"  data-for="green"></button>
                      </div>
                    </div>
                  </div>
                  <ul className="listInfo mb60">
                    <li>
                      <div className="groupNumber noBorder"><button type="button" className="cancelForm"><i className="icon icon-remove"></i></button></div>
                      <p className="smallTitle pt25 pb25">glen azzopardi</p>
                    </li>
                    <li>
                      <div className="groupNumber noBorder"><button type="button" className="cancelForm"><i className="icon icon-remove"></i></button></div>
                      <p className="smallTitle  pt25 pb25">glen azzopardi</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="formMeta clearAfter">
            <ul className="clearAfter">
              <li>
                <button className="btn green leftIcon" type="button"><i className="icon icon-save"></i>Save in Draft</button>
              </li>
            </ul>
          </div>
        </form>

      </div>
    );
  }
}
