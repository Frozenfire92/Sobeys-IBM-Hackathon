export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('dashboard'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('dashboard.kiosks.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard.kiosks.index'),
    this.toRoute('dashboard.kiosks.kiosk'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
