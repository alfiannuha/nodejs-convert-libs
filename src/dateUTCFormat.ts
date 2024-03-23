import moment from 'moment'

export function customeUTCFormatDate(date: Date, format: string, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format(format)
}

export function UTCformatDate(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MMMM YYYY')
}

export function UTCformatShortDate(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MM YY')
}

export function UTCformatDateTime(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MMMM YYYY HH:mm')
}

export function UTCformatShortDateTime(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MM YY HH:mm')
}

export function UTCformatDateTimeSecond(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MMMM YYYY HH:mm:ss')
}

export function UTCformatShortDateTimeSecond(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('DD MM YY HH:mm:ss')
}

export function UTCformatMonth(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('MMMM YYYY')
}

export function UTCformatYear(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('YYYY')
}

export function UTCformatDay(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('dddd')
}

export function UTCformatShortDay(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('ddd')
}

export function UTCformatShortMonth(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('MMM')
}

export function UTCformatShortYear(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('YY')
}

export function UTCformatTime(date: Date, locale: string = "id"): string {
  return moment.utc(date).locale(locale).format('HH:mm:ss')
}