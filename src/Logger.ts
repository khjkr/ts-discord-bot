import _ from 'colors'
import { appendFileSync } from 'fs'
import { join } from 'path'

class Logger {
  static getTimeStamp(): string {
    const date = new Date()

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return `[${year}.${month+1}.${day} ${hour}:${minute}:${second}] `
  }

  static println(msg: string) {
    appendFileSync(join(__dirname, `/logs/${Logger.getTimeStamp().split(' ')[0].replace('[', '').trim()}.log`), msg + '\n')
  }

  static info(msg: string): void {
    console.log('[Info] '.blue + Logger.getTimeStamp().white + msg.white)
    Logger.println('[Info] ' + Logger.getTimeStamp() + msg)
  }

  static warn(msg: string): void {
    console.log('[Warn] '.yellow + Logger.getTimeStamp().white + msg.white)
    Logger.println('[Warn] ' + Logger.getTimeStamp() + msg)
  }

  static err(msg: string): void {
    console.log('[Error] '.red + Logger.getTimeStamp().white + msg.white)
    Logger.println('[Error] ' + Logger.getTimeStamp() + msg)
  }
}

export default Logger