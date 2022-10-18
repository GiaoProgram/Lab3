import React, { useState } from "react";

export default function Todo({ title, content, author }) {
    const { secondaryColor } = useContext(ThemeContext);
    return (
      <div>
        <h3 style={{ color: secondaryColor }}>{title}</h3>
        <div>{content}</div>
        <br />
        <i>
          Written by <b>{author}</b>
        </i>
      </div>
    );
  }