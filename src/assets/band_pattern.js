 class BandPattern extends HTMLElement {
      connectedCallback() {
          const side = this.getAttribute('side') || 'both';
          const cssClass = this.getAttribute('class') || '';
          const colors = this.getAttribute('colors');
          let rightColor1 = '#F2EDFC';
          let rightColor2 = '#E9D7FE';
          let rightColor3 = '#D6BBFB';
          let leftColor1 = '#F2EDFC';
          let leftColor2 = '#D6BBFB';
          if (colors) {
              const colorArray = colors.split(',').map(c => c.trim());
              if (colorArray.length >= 6) {
                  rightColor1 = colorArray[1];
                  rightColor2 = colorArray[2];
                  rightColor3 = colorArray[3];
                  leftColor1 = colorArray[4];
                  leftColor2 = colorArray[5];
              }
          }
           let svgContent = `
           <svg width="1800" height="548" viewBox="0 0 1440 548" fill="none" xmlns="http://www.w3.org/2000/svg" class="${cssClass}">
            <foreignObject x="-591.111" y="-111.111" width="2622.22" height="770.222">
              <div xmlns="http://www.w3.org/1999/xhtml"
                   style="backdrop-filter:none;
                          clip-path:url(#bgblur_0_519_1184_clip_path);
                          height:100%;width:100%; overflow: hidden;">
              </div>
            </foreignObject>
          `;
          if (side === 'both' || side === 'right') {
              svgContent += `
            //section de droite
            <path d="M1320 227.006L1786.67 168.653V239.764L1320 298.117V227.006Z" fill="${rightColor1}"/>
            <path d="M840 216.787L1520 131.444V202.555L840 287.898V216.787Z" fill="${rightColor2}"/>
            <path d="M1017.78 123.352L1484.44 65V136.111L1017.78 194.463V123.352Z" fill="${rightColor3}"/>
              `;
          }
          if (side === 'both' || side === 'left') {
              svgContent += `
            //section de gauche 
            <path d="M-80 331.463L386.667 273.11V344.221L-80 402.574V331.463Z" fill="${leftColor1}"/>
            <path d="M-248.889 423.673L217.778 365.32V436.431L-248.889 494.784V423.673Z" fill="${leftColor2}"/>
              `;
          }
          svgContent += `
            <defs>
              <clipPath id="bgblur_0_519_1184_clip_path" transform="translate(591.111 111.111)">
                <path d="M-480 0H1920V184.938L728 404L72 450L-464 548L-480 0Z"/>
              </clipPath>
            </defs>
          </svg>
          `;
          this.innerHTML = svgContent;
          // this.style.position = 'absolute';
          this.style.zIndex = '-1';
      }
 }
customElements.define('band-pattern', BandPattern);
