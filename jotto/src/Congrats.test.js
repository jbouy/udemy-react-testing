import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });
