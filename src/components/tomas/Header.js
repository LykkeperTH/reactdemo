import React from "react";
function Picture() {
  return (
    <section className="Header">
      <div className="Header-left">
        <h1 className="header-title">
          Peaky Blinder: รู้จักแก๊งนักเลงย่านเบอร์มิงแฮมในชีวิตจริง ที่คุณจะไม่
          ‘ฟู้กกิ้ง’ ด้วยเป็นอันขาด
        </h1>
        <div className="category">
          <a href="https://adaybulletin.com/category/know/easteregg">
            Easter Egg
          </a>
        </div>
        <div>19 Oct 2019</div>
        <div className="category-lable">
          <span>เรื่องโดย:</span>
          <h3 className="category-lablename">กฤตนัย จงไกรจักร</h3>
        </div>
      </div>
      <div className="header-right">
        <img
          alt=""
          src="https://sgp1.digitaloceanspaces.com/adaybulletin/2019/10/ETE-06-WEB-.jpg"
          className="header-img"
        />
      </div>
    </section>
  );
}

export default Picture;
