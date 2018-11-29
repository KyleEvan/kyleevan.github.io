import batman_sm_jpg from '../images/batman@sm.jpg';
import batman_md_jpg from '../images/batman@md.jpg';
import batman_lg_jpg from '../images/batman@lg.jpg';

import career_areas_sm_png from '../images/career-areas-mobile@sm.png';
import career_areas_md_png from '../images/career-areas-mobile@md.png';
import career_areas_lg_png from '../images/career-areas-mobile@lg.png';
import career_areas_xl_png from '../images/career-areas-mobile@xl.png';

import careers_screens_sm_png from '../images/careers_screens@sm.png';
import careers_screens_md_png from '../images/careers_screens@md.png';
import careers_screens_lg_png from '../images/careers_screens@lg.png';
import careers_screens_xl_png from '../images/careers_screens@xl.png';

import comboSmash_death_sm_jpg from '../images/comboSmash-death@sm.jpg';
import comboSmash_death_md_jpg from '../images/comboSmash-death@md.jpg';
import comboSmash_death_lg_jpg from '../images/comboSmash-death@lg.jpg';

import comboSmash_horde_sm_jpg from '../images/comboSmash-horde@sm.jpg';
import comboSmash_horde_md_jpg from '../images/comboSmash-horde@md.jpg';
import comboSmash_horde_lg_jpg from '../images/comboSmash-horde@lg.jpg';

import comboSmash_preview_sm_jpg from '../images/comboSmash-preview@sm.jpg';
import comboSmash_preview_md_jpg from '../images/comboSmash-preview@md.jpg';
import comboSmash_preview_lg_jpg from '../images/comboSmash-preview@lg.jpg';

import cycles_sm_jpg from '../images/cyclesTile@sm.jpg';
import cycles_md_jpg from '../images/cyclesTile@md.jpg';
import cycles_lg_jpg from '../images/cyclesTile@lg.jpg';

import react_dashboard_lg_png from '../images/react-dashboard@lg.png';

import react_view_today_sm_png from '../images/react-view-today@sm.png';
import react_view_today_md_png from '../images/react-view-today@md.png';
import react_view_today_lg_png from '../images/react-view-today@lg.png';


var images = [
  {
    name: 'batman',
    src: {
      sm: batman_sm_jpg,
      md: batman_md_jpg,
      lg: batman_lg_jpg,
    }
  },
  {
    name: 'career_areas',
    src: {
      sm: career_areas_sm_png,
      md: career_areas_md_png,
      lg: career_areas_lg_png,
      xl: career_areas_xl_png
    }
  },
  {
    name: 'careers_screens',
    src: {
      sm: careers_screens_sm_png,
      md: careers_screens_md_png,
      lg: careers_screens_lg_png,
      xl: careers_screens_xl_png,
    }
  },
  {
    name: 'comboSmash_death',
    src: {
      sm: comboSmash_death_sm_jpg,
      md: comboSmash_death_md_jpg,
      lg: comboSmash_death_lg_jpg,
    }
  },
  {
    name: 'comboSmash_horde',
    src: {
      sm: comboSmash_horde_sm_jpg,
      md: comboSmash_horde_md_jpg,
      lg: comboSmash_horde_lg_jpg,
    }
  },
  {
    name: 'cycles',
    src: {
      sm: cycles_sm_jpg,
      md: cycles_md_jpg,
      lg: cycles_lg_jpg,
    }
  },
  {
    name: 'comboSmash_preview',
    src: {
      sm: comboSmash_preview_sm_jpg,
      md: comboSmash_preview_md_jpg,
      lg: comboSmash_preview_lg_jpg,
    }
  },

  {
    name: 'react_dashboard',
    src: {
      lg: react_dashboard_lg_png
    }
  },
  {
    name: 'react_view_today',
    src: {
      sm: react_view_today_sm_png,
      md: react_view_today_md_png,
      lg: react_view_today_lg_png
    }
  }
]


exports.images = function(breakpoints, window){
  let imageSize;
  let imagesSized = {};
  let imagesSrc = [];
  let imagesAll = {};

  let size = Object.keys(breakpoints);
  for(let i = 0; i < images.length; i++){
    let image = images[i];
    for(let s = size.length-1; s >= 0; s--){
      if(window >= breakpoints[size[s]]){
        if(image.src[size[s]]){
          imagesSized[image.name] = image.src[size[s]];
          imagesSrc.push(image.src[size[s]]);
          s = 0;
        }
      }
    }
    imagesAll[image.name] = image.src;
  }
  return {
    sized: imagesSized,
    sources: imagesSrc,
    all: imagesAll
  }
}
