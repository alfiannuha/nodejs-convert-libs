import moment from 'moment'

export function CustomeFormatDate(date: Date, format: string, locale: string = "id"): string {
  return moment(date).locale(locale).format(format)
}

export function FormatDate(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MMMM YYYY')
}

export function FormatShortDate(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MM YY')
}

export function FormatDateTime(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MMMM YYYY HH:mm')
}

export function FormatShortDateTime(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MM YY HH:mm')
}

export function FormatDateTimeSecond(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MMMM YYYY HH:mm:ss')
}

export function FormatShortDateTimeSecond(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('DD MM YY HH:mm:ss')
}

export function FormatMonth(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('MMMM YYYY')
}

export function FormatYear(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('YYYY')
}

export function FormatDay(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('dddd')
}

export function FormatShortDay(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('ddd')
}

export function FormatShortMonth(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('MMM')
}

export function FormatShortYear(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('YY')
}

export function FormatTime(date: Date, locale: string = "id"): string {
  return moment(date).locale(locale).format('HH:mm:ss')
}