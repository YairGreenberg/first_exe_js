//closure
function outer(){
    let counter = 0;
    function inner(){
        counter++;
        return counter;
    }
    return inner;
}
const count = outer();
console.log(count());
console.log(count());
console.log(count());

//factories

function MakeMultiplieyr(factor)
{
    return function(x){
        return x*factor;
    };
}
const by5 = MakeMultiplieyr(5);
const by10 =MakeMultiplieyr(10);


console.log('2*5:>>', by5(2));
console.log('2*10:>>', by10(2));

//task
function spells()
{
    let spell_counter = 0;
    function spell()
    {
        spell_counter++;
        return spell_counter
    }
    return spell;
}
const spell_count = spells()
console.log('muw spell',spell_count());
console.log('nuw spell',spell_count());
console.log('nuw spell',spell_count());
console.log('nuw spell',spell_count());
 



//task2
function createSpellFactory(){
    let levele = 0;
return function spellFactory(name)
{
    levele++;
    return function ()
    {
        
        console.log(`${name} lavle: ${levele}!`);
        
    }
}
}
const spellFactory =createSpellFactory();

const fireball = spellFactory("fireboll");
fireball();
const advancedFireball = spellFactory("adFireball");
advancedFireball();
const iceBlast = spellFactory("iceBlast")
iceBlast();
//







//task3

function createSession(username)
{
    let Token = generateToken();
    function generateToken()
    {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let token = ''
    
        for(let i = 0;i<16;i++){
            const randomIndex = Math.floor(Math.random()*alphabet.length);
            token += alphabet[randomIndex]

    }
    return token;
    }
    
    function getUserName()     
    {
        return username;
    }
    function getTokenPreview()   
    {
        return Token.slice(0,4);
    }
    function validateToken(t)   
    {
        if(t===Token)
        {
            return true
        }
        else{
            return false
        }
    }
    function regenerateToken()    
    {
        Token= generateToken()

    }
    return{
        getUserName,
        getTokenPreview,
        validateToken,
        regenerateToken
    }

    

}

const session = createSession("Alice");
console.log(session.getUserName());
console.log(session.getTokenPreview());
console.log(session.validateToken("sUjk"));
session.regenerateToken();
console.log(session.getTokenPreview());
//exe1



//exe2
function cteateGreeter(name)
{
    let sentence = 'Hello ';
    function add_word()
    {
        sentence += name
        return sentence;
    }
    return add_word;

}



const greet = cteateGreeter("yair!");

console.log(greet());



//exe3
function createBankAccount(startingBalance)
{
     let balance  =startingBalance;
        function deposit(amount)
        {
            balance  += amount   
            return  balance
        }
        function withdraw(amount)
        {
            balance -= amount;
            return balance;
        }
        function getBalance()
        {
            console.log(`this balance: ${balance}`);
            
        }
        
    return {
        deposit,
        withdraw,
        getBalance
    }

}


const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(20));
console.log(account.getBalance());


//exe 5

function spellFactory1(spellName)
{
    let level = 0;
    function print_name()
    {
        level++
        console.log(`${spellName} in  level: ${level}!`);
        // return level
    }
    return print_name;
}
const name = spellFactory1("car");
name()
name()
name()
name()
name()
name()




