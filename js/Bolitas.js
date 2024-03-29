
  const settings = {
    pointCount: 50,
    startSpeed: 1.3,
    availableColors: ["#aaa01f", "#bba301", "#eaf2a1", "#aacccc", "#faf3aa"]
  };

  let context;
  let objects;
  let mousePos = {};

  const canvas = document.createElement("canvas");
  const init = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    objects = [];

    document.body.appendChild(canvas);

    context = canvas.getContext("2d");

    for (let i = 0; i <= settings.pointCount; i++) {
      let plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
      let plusOrMinusY = Math.random() < 0.5 ? -1 : 1;

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const z = Math.random() * - 150;

      const v = {
        x: plusOrMinusX * Math.random() * settings.startSpeed,
        y: plusOrMinusY * Math.random() * settings.startSpeed,
        z: Math.random() * settings.startSpeed * 4,
      };

      const colorIndex = Math.floor(
        Math.random() * settings.availableColors.length
      );

      objects.push(
        new Point(canvas, settings.availableColors[colorIndex], x, y, z, v)
      );
    }

    requestAnimationFrame(() => {
      draw();
    });
    bindMouseMove();
  }


  class Point {
    constructor(canvas, color, x, y, z, v) {
      this.canvas = canvas;
      this.color = color;
      this.x = x;
      this.y = y;
      this.z = z;
      this.v = v;
      this.radius = this.calulateRadius();
    }

    calulateRadius() {
      return Math.abs(this.z / 120);
    }

    calculatePosition() {
      const diameter = 2 * this.radius;

      if (
        this.x > this.canvas.width ||
        this.y > this.canvas.height ||
        this.x + diameter < 0 ||
        this.y + diameter < 0
      ) {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.z = -40;
      }

      this.radius = this.calulateRadius();

      this.x += this.v.x;
      this.y += this.v.y;
      this.z += this.v.z;
    }

    adjustTowardsMouse(distToMouse, mouseX, mouseY) {
      if (mouseX > this.x) {
        this.v.x += 10 / distToMouse;
      }
      if (mouseY > this.Y) {
        this.v.y += 10 / distToMouse;
      }

      if (mouseX <= this.x) {
        this.v.x -= 10 / distToMouse;
      }
      if (mouseY <= this.Y) {
        this.v.y -= 10 / distToMouse;
      }
    }

    draw(context) {
      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.fill();
    }
  }



  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach(object => {
      object.calculatePosition();

      if (mousePos) {
        const xDiff = object.x - mousePos.x;
        const yDiff = object.y - mousePos.y;

        const pointDist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

        if (pointDist < (150 + object.radius)) {
          object.adjustTowardsMouse(pointDist, mousePos.x, mousePos.y);
        }
      }

      object.draw(context);
    });

    requestAnimationFrame(draw);
  };

  const bindMouseMove = () => {
    listener = document.addEventListener('mousemove', e => {
      //document.removeEventListener('mousemove', listener);
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      //bindMouseMove();
    });
  }
  init();

  window.addEventListener('resize', () => {
    init();
  });