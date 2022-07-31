import React from "react";
import { FiUser } from "react-icons/fi";
import { CgTrophy } from "react-icons/cg";
import { FaFutbol } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import { BsTv } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

interface PropsType {
  name: string;
  color?: string;
}

function Icon(props: PropsType) {
  if (props.name === "BsTv") {
    return (
      <BsTv
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "FiUser") {
    return (
      <FiUser
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "CgTrophy") {
    return (
      <CgTrophy
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "FaFutbol") {
    return (
      <FaFutbol
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "FiCompass") {
    return (
      <FiCompass
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "FiClock") {
    return (
      <FiClock
        style={{ color: props.color ? props.color : "#000000", fontSize: 30 }}
      />
    );
  }
  if (props.name === "FiChevronDown") {
    return (
      <FiChevronDown
        style={{ color: props.color ? props.color : "#000000", fontSize: 20 }}
      />
    );
  }
  if (props.name === "FiSearch") {
    return (
      <FiSearch
        style={{ color: props.color ? props.color : "#000000", fontSize: 20 }}
      />
    );
  }
  return "";
}

export default Icon;
