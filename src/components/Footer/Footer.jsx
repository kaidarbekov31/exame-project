import React from "react";
import "./Footer.css";
import tg from '../image/tg.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>
        Back to top
      </div>
      <div className="footer-content">
        <div className="footer-header">
          <h1>World of Tanks в социальных сетях</h1>
          <h3>Подписывайтесь, чтобы не пропустить всё самое интересное</h3>
        </div>
        <div className="footer-links">
          <a href="http://forum.worldoftanks.ru/?link_place=wotp_link_footer&_ga=2.31626174.1831659555.1638703378-502968172.1638703378" target="_blank" rel="noopener noreferrer">
            <div className="footer-link-item">
              <img width="40px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjYgMzYiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGlkPSJYTUxJRF81XyIgY2xhc3M9InN0MCIgZD0iTTE4LjEgMjAuMWwtMi4zIDIuMyAzLjQgMy41IDMuOS0zLjlWOS45aC01eiIvPjxwYXRoIGlkPSJYTUxJRF80XyIgY2xhc3M9InN0MCIgZD0iTTcuOSA5LjlIMi44VjIybDMuOSAzLjkgMy42LTMuNS0yLjQtMi4zeiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOS4yIDBIN0wwIDYuOXYxNi4zTDEyLjkgMzYgMjYgMjMuMlY2LjdMMTkuMiAwem01LjQgMjIuNkwxMyAzNCAxLjQgMjIuNlY3LjRsNi4zLTYuMmgxMC45bDYuMSA2LS4xIDE1LjR6Ii8+PHBhdGggaWQ9IlhNTElEXzFfIiBjbGFzcz0ic3QwIiBkPSJNOC4yIDIuM0wyLjkgNy44aDcuNXYyMS43bDIuNiAyLjYgMi42LTIuNlY3LjhoNy41bC01LjMtNS41eiIvPjwvc3ZnPg==" alt="Forum" />
              <h5>ВСТУПАЙТЕ В СООБЩЕСТВО</h5>
              <h6>БОЛЕЕ 160 000 000 ИГРОКОВ</h6>
            </div>
          </a>
          <a href="http://t.me/project_wot_bot" target="_blank" rel="noopener noreferrer">
            <div className="footer-link-item">
              <img width="80px" src={tg} alt="Telegram Bot" />
              <h5>ЗАДАЙТЕ ВОПРОС БОТУ</h5>
              <h5>В ТЕЛЕГГРАММ</h5>
            </div>
          </a>
          <a href="https://vk.com/worldoftanks" target="_blank" rel="noopener noreferrer">
            <div className="footer-link-item">
              <img width="55px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDM2IDIzIj48cGF0aCBmaWxsPSIjNjQ5MkJCIiBkPSJNMzIuMDQ0IDE1Ljk2MXMyLjkxIDMuMTU1IDMuNjMgNC42MTVhLjI2LjI2IDAgMCAxIC4wMzMuMDY5Yy4yOTMuNTQuMzY1Ljk2Mi4yMjEgMS4yNzQtLjI0My41MTUtMS4wNjUuNzc0LTEuMzQ0Ljc5NmgtNS4xNDVjLS4zNTggMC0xLjEwMy0uMTAzLTIuMDEtLjc5LS42OTMtLjUzMS0xLjM4My0xLjQwNy0yLjA1LTIuMjYyLS45OTgtMS4yNy0xLjg2LTIuMzcyLTIuNzMzLTIuMzcyLS4xMTIgMC0uMjIuMDItLjMyNC4wNTktLjY2LjIzLTEuNSAxLjI2Mi0xLjUgNC4wMTQgMCAuODYxLS42MTkgMS4zNTEtMS4wNTIgMS4zNTFoLTIuMzU3Yy0uODAyIDAtNC45ODItLjMwOC04LjY4OC00LjU5N0M0LjE4MyAxMi44NjguMTA1IDIuMzM2LjA2NSAyLjI0My0uMTg5IDEuNTYuMzQ0IDEuMTkuOTIgMS4xOWg1LjE5NWMuNjk2IDAgLjkyMy40NjIgMS4wODIuODc3LjE4My40NzYuODY0IDIuMzggMS45OCA0LjUyIDEuODA3IDMuNDggMi45MTcgNC44OTYgMy44MDUgNC44OTZhLjg4NC44ODQgMCAwIDAgLjQ3NS0uMTM4YzEuMTYtLjcuOTQzLTUuMjQyLjg5LTYuMTc5IDAtLjE4MS0uMDAzLTIuMDI4LS41OTctMi45MjEtLjQyNC0uNjQtMS4xNDgtLjg4OS0xLjU4NS0uOTguMTE3LS4xODYuMzY1LS40Ny42ODQtLjYzOEMxMy42NDIuMTkyIDE1LjA3Ny4xMyAxNi41LjEzaC43OWMxLjU0NC4wMjQgMS45NDQuMTMzIDIuNTA2LjI4OSAxLjEzLjI5NiAxLjE1MiAxLjEgMS4wNTMgMy44MzgtLjAzLjc4Mi0uMDYgMS42NjMtLjA2IDIuNyAwIC4yMjEtLjAwOS40NjgtLjAwOS43MTktLjAzNCAxLjQwNC0uMDc5IDIuOTg3LjgyNSAzLjYzN2EuNjkuNjkgMCAwIDAgLjM5LjEyMmMuMzEzIDAgMS4yNTEgMCAzLjc5NS00Ljc5IDEuMTE2LTIuMTE2IDEuOTgtNC42MSAyLjAzOS00Ljc5OC4wNS0uMTA1LjIwMi0uNC4zODUtLjUxOGEuOC44IDAgMCAxIC40MjUtLjExaDYuMTExYy42NjYgMCAxLjExOC4xMSAxLjIwNi4zODcuMTQ4LjQ0OC0uMDI5IDEuODE3LTIuODE5IDUuOTU3LS40Ny42OS0uODgyIDEuMjg2LTEuMjQ0IDEuODA4LTIuNTI5IDMuNjQyLTIuNTI5IDMuODI2LjE1IDYuNTkxeiIvPjwvc3ZnPg==" alt="VK" />
              <h5>ЧИТАЙТЕ В ВКОНТАКТЕ</h5>
            </div>
          </a>
          <a href="https://www.youtube.com/user/WorldOfTanks" target="_blank" rel="noopener noreferrer">
            <div className="footer-link-item">
              <img width="50px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIyOSIgdmlld0JveD0iMCAwIDM2IDI5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMiA3aDE3djE3SDEyeiIvPjxwYXRoIGZpbGw9IiNDQjE3MUUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IC42OEMuMzEuNjggMCAyLjI1MyAwIDE0LjU0IDAgMjYuODI3LjMxIDI4LjQgMTggMjguNHMxOC0xLjU3MyAxOC0xMy44NkMzNiAyLjI1MyAzNS42OS42OCAxOCAuNjh6bTUuNzY5IDE0LjQ2MWwtOC4wODIgMy43NzNjLS43MDcuMzI4LTEuMjg3LS4wNC0xLjI4Ny0uODJ2LTcuMTA3YzAtLjc4LjU4LTEuMTQ5IDEuMjg3LS44MjFsOC4wODIgMy43NzNjLjcwNy4zMzEuNzA3Ljg3MSAwIDEuMjAyeiIvPjwvZz48L3N2Zz4=" alt="YouTube" />
              <h5>СМОТРИТЕ НА YOUTUBE</h5>
              <h6>3 610 000 ПОДПИСЧИКОВ</h6>
            </div>
          </a>
        </div>
        <div className="contact-info">
          <h3>How to contact us?</h3>
          <h5>Email: <span className="email">ajdarbekovkudajberdi@gmail.com</span></h5>
          <h5>Phone number: <a href="tel:+996704135830" className="phone">+996707614021</a></h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
