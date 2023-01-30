const mydetails = {}
const firstname = { firstname: "Nnamdi" }
const surname = { surname: "Chidume" }
const occupation = { occupation: "Software Developer" }
const nationality = { nationality: "Nigerian" }
console.log(mydetails)
Object.assign(mydetails, surname, firstname, occupation, nationality);
console.log(mydetails)


// ts document
class Sprite
{
    name = "";
    x = 0;
    y = 0;

    constructor(name: string)
    {
        this.name = name;
    }
}

// Then you need a type and a factory function which returns a class expression extending the base classThiruvanmiyur, Chennai, Tamil Nadu

// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:


function Scale<TBase extends Constructor>(Base: TBase)
{
    return class Scaling extends Base
    {
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1;

        setScale(scale: number)
        {
            this._scale = scale;
        }

        get scale(): number
        {
            return this._scale;
        }
    };
}


// you can create a class which represents the base class with mixins applied:

// Compose a new class from the Sprite class,
// with the Mixin Scale applier:
const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);