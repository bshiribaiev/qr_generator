import inquirer from "inquirer"
import qr from 'qr-image'
import fs from 'fs'

const questions = [
    {
        type: 'input',
        name: 'url', 
        message: 'Enter url: '
    }
]

inquirer
    .prompt(questions)

    .then((answers) => {
        fs.writeFile('user.txt', answers.url, (err) => {
            if (err) throw err;
            console.log('the file has been saved')
        })

        let qrSvg = qr.image(answers.url, {type: 'png'})
        qrSvg.pipe(fs.createWriteStream('userQr.png'))
    })


