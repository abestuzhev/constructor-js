import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
   constructor(selector, update) {
      this.$el = document.querySelector(selector);
      this.update = update;
      this.init();
   }

   init() {
      this.$el.innerHTML = this.template;
      this.$el.addEventListener("submit", this.addBlock.bind(this));
   }

   get template() {
      return [
         block('title'),
         block('text')
      ].join('');
   }

   addBlock(event) {
      event.preventDefault();

      const type = event.target.name;
      const value = event.target.value.value;
      const styles = event.target.styles.value;

      const Component = type === 'text' ? TextBlock : TitleBlock;
      const newBlock = new Component(value, {styles});

      this.update(newBlock);
      event.target.value.value = '';
      event.target.styles.value = '';
   }
}

function block(type) {
   return `
      <form name="${type}" class="form">
         <p>${type}</p> 
         <div class="form-group">
            <input type="text" class="form-control form-control-sm" name="value">
         </div>
         <div class="form-group">
            <input type="text" class="form-control form-control-sm" name="styles">
         </div>
         <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
   `
}

