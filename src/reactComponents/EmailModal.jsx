import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { isEmailModalVisibleAtom, emailAtom } from "../store";

export default function EmailModal() {
  const [isVisible, setIsVisible] = useAtom(isEmailModalVisibleAtom);
  const email = useAtomValue(emailAtom);

  const [onCopyMessage, setOnCopyMessage] = useState("");

  const buttons = [
    {
      id: 0,
      name: "Да",
      handler: () => {
        navigator.clipboard.writeText(email);
        setOnCopyMessage("Адресс почты скопирован!");
      },
    },
    {
      id: 1,
      name: "Нет",
      handler: () => {
        setIsVisible(false);
      },
    },
  ];

  return (
    isVisible && (
      <div className="modal">
        <div className="modal-content">
          <h1>Хочешь скопировать мою почту?</h1>
          <span>{email}</span>
          <p>{onCopyMessage}</p>
          <div className="modal-btn-container">
            {buttons.map((button) => (
              <button
                key={button.id}
                className={"modal-btn"}
                onClick={button.handler}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
