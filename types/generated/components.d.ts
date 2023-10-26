import type { Schema, Attribute } from '@strapi/strapi';

export interface BusynessLocation extends Schema.Component {
  collectionName: 'components_busyness_location';
  info: {
    displayName: 'Location busyness';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    examTermWeekdays: Attribute.Component<'busyness.term'> & Attribute.Required;
    examTermWeekends: Attribute.Component<'busyness.term'> & Attribute.Required;
    ordinaryTermWeekdays: Attribute.Component<'busyness.term'> &
      Attribute.Required;
    ordinaryTermWeekends: Attribute.Component<'busyness.term'> &
      Attribute.Required;
    holidayPeriod: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    > &
      Attribute.Required;
  };
}

export interface BusynessTerm extends Schema.Component {
  collectionName: 'components_busyness_term';
  info: {
    displayName: 'Term busyness';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    from08: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from11: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from14: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from17: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from20: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from23: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from02: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
    from05: Attribute.Enumeration<
      [
        'Extremely busy',
        'Very busy',
        'Busy',
        'Moderately busy',
        'Moderately quiet',
        'Quiet',
        'Very quiet',
        'Extremely quiet'
      ]
    >;
  };
}

export interface OpeningTimesOpeningTimes extends Schema.Component {
  collectionName: 'components_opening_times_opening_times';
  info: {
    displayName: 'Opening times';
    icon: 'clock';
  };
  attributes: {
    mondayFrom: Attribute.Time;
    mondayTo: Attribute.Time;
    tuesdayFrom: Attribute.Time;
    tuesdayTo: Attribute.Time;
    wednesdayFrom: Attribute.Time;
    wednesdayTo: Attribute.Time;
    thursdayFrom: Attribute.Time;
    thursdayTo: Attribute.Time;
    fridayFrom: Attribute.Time;
    fridayTo: Attribute.Time;
    saturdayFrom: Attribute.Time;
    saturdayTo: Attribute.Time;
    sundayFrom: Attribute.Time;
    sundayTo: Attribute.Time;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'busyness.location': BusynessLocation;
      'busyness.term': BusynessTerm;
      'opening-times.opening-times': OpeningTimesOpeningTimes;
    }
  }
}
