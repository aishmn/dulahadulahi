import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-danger text-center text-white h4-responsive alert-dismissible fade show rounded-0 bg-dark mb-0`}
      style={{ zIndex: "100" }}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = { alerts: PropTypes.array.isRequired };
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
