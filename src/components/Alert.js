import React from "react";

export default function Alert({ children, type }) {
  const alertType = `alert ${type}`;

  return (
    <>
      <label>
        <input type="checkbox" class="alertCheckbox" autocomplete="off" />
        <div class={alertType}>
          <span class="alertClose">X</span>
          <span class="alertText">
            {children}
            <br class="clear" />
          </span>
        </div>
      </label>
    </>
  );
}
