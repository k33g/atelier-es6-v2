import Collection from '../../skeleton/Collection';
import Human from './Human';

class Humans extends Collection {

  constructor (humans) {
    super(Human,humans);
  }
}

export default Humans;