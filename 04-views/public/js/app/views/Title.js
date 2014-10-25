import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class Title extends View {

  constructor (title) {

    super({
      element: $q("#my-title")
    });

    this.title = title;

    // afficher le titre
    this.render();
  }

  template (title) {
    return `<h1 style="color:green;">${title}</h1>`;
  }

  render () {
    this.html(this.template(this.title));
  }

}

export default Title;